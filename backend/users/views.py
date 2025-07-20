from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from .models import Trainer
from .serializers import TrainerSerializer, UserLoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib.auth.tokens import default_token_generator
from django.utils.html import strip_tags
from django.db import transaction, IntegrityError
import logging

logger = logging.getLogger(__name__)

class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.select_related('user').all()
    serializer_class = TrainerSerializer

    def get_permissions(self):
        if self.request.method in ['GET', 'HEAD', 'OPTIONS']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        # Remove create functionality since we have register_user endpoint
        return Response(
            {'error': 'Please use /register endpoint to create accounts'},
            status=status.HTTP_405_METHOD_NOT_ALLOWED
        )

def send_activation_email(user, request):
    token = default_token_generator.make_token(user)
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    activation_link = request.build_absolute_uri(
        reverse('activate_user', kwargs={'uidb64': uid, 'token': token})
    )
    subject = 'Activate Your Account'
    message = f"""
        <html>
        <body>
            <p>Hi {user.first_name},</p>
            <p>Please click the link below to activate your account:</p>
            <p><a href="{activation_link}">Activate Account</a></p>
            <p>If you didn't request this, you can ignore this email.</p>
        </body>
        </html>
    """
    from_email = f"FitConnect Team <{settings.EMAIL_HOST_USER}>"
    email = EmailMultiAlternatives(
        subject,
        strip_tags(message),
        from_email,
        [user.email]
    )
    email.attach_alternative(message, "text/html")
    email.send()

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register_user(request):
    data = request.data
    required_fields = ['email', 'password', 'first_name', 'last_name', 'experience_years']
    missing_fields = [field for field in required_fields if field not in data]
    
    if missing_fields:
        return Response(
            {'error': f'Missing required fields: {", ".join(missing_fields)}'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        with transaction.atomic():  # Ensure both operations succeed or fail together
            # Create User first
            user = User.objects.create_user(
                username=data['email'],
                email=data['email'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                password=data['password'],
                is_active=False
            )

            # Create Trainer with the user instance directly (not ID)
            trainer = Trainer.objects.create(
                user=user,  # Pass the user object directly
                bio=data.get('bio', ''),
                experience_years=data['experience_years'],
                specialties=data.get('specialties', 'fitness'),
                phone_number=data.get('phone_number', ''),
            )

            # If you need serializer validation, do it like this:
            serializer = TrainerSerializer(trainer, context={'request': request})
            
            send_activation_email(user, request)
            return Response(
                {
                    'message': 'User registered successfully. Please check your email to activate.',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED
            )

    except IntegrityError as e:
        logger.error(f'Registration integrity error: {str(e)}')
        return Response(
            {'error': 'Registration failed - data conflict', 'details': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f'Registration error: {str(e)}')
        return Response(
            {'error': 'Registration failed', 'details': str(e)},
            status=status.HTTP_400_BAD_REQUEST
        )
@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def activate_user(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect(f"{settings.FRONTEND_URL}/login?activated=true")
    else:
        return Response(
            {'error': 'Activation link is invalid or expired'},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def user_login(request):
    serializer = UserLoginSerializer(data=request.data, context={'request': request})
    
    if not serializer.is_valid():
        return Response(
            {'error': serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
    
    user = serializer.validated_data['user']
    
    # Check if the user is a trainer
    try:
        trainer = Trainer.objects.get(user=user)
        user_type = 'trainer'
    except Trainer.DoesNotExist:
        return Response(
            {'error': 'No trainer account found with these credentials'},
            status=status.HTTP_403_FORBIDDEN
        )
    
    # Create or get token
    token, created = Token.objects.get_or_create(user=user)
    
    return Response({
        'token': token.key,
        'user_id': user.id,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'user_type': user_type,
        'trainer_id': trainer.id if user_type == 'trainer' else None
    }, status=status.HTTP_200_OK)