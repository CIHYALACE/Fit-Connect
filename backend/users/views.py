from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Trainer
from .serializers import TrainerSerializer
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib.auth.tokens import default_token_generator
from django.utils.html import strip_tags
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
    required_fields = ['email', 'password', 'first_name', 'last_name', 'bio', 'experience_years']
    missing_fields = [field for field in required_fields if field not in data]
    
    if missing_fields:
        return Response(
            {'error': f'Missing required fields: {", ".join(missing_fields)}'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        # Create User first
        user = User.objects.create_user(
            username=data['email'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password=data['password'],
            is_active=False
        )

        # Then create Trainer
        profile_data = {
            'user': user.id,
            'bio': data['bio'],
            'experience_years': data['experience_years'],
            'specialties': data.get('specialties', 'fitness'),
            'phone_number': data.get('phone_number'),
        }
        
        serializer = TrainerSerializer(data=profile_data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            send_activation_email(user, request)
            return Response(
                {'message': 'User registered successfully. Please check your email to activate.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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