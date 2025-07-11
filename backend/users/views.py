from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import TrainerProfile, CustomUser
from .serializers import TrainerProfileSerializer
from django.contrib.auth.hashers import make_password
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.urls import reverse
from django.shortcuts import redirect
from django.contrib.auth.tokens import default_token_generator
from rest_framework.decorators import permission_classes
from django.utils.html import strip_tags

import logging
from rest_framework import status

logger = logging.getLogger(__name__)

class TrainerProfileViewSet(viewsets.ModelViewSet):
    queryset = TrainerProfile.objects.all()
    serializer_class = TrainerProfileSerializer

    def get_permissions(self):
        if self.request.method in ['POST', 'GET', 'HEAD', 'OPTIONS']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]
        
    def create(self, request, *args, **kwargs):
        logger.info(f'Received POST request to create trainer profile. Data: {request.data}')
        
        required_fields = ['first_name', 'last_name', 'bio', 'experience_years', 'specialties']
        missing_fields = [field for field in required_fields if field not in request.data]
        
        if missing_fields:
            logger.error(f'Missing required fields: {missing_fields}')
            return Response(
                {'error': f'Missing required fields: {", ".join(missing_fields)}'},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        try:
            return super().create(request, *args, **kwargs)
        except Exception as e:
            logger.error(f'Error creating trainer profile: {str(e)}')
            return Response(
                {'error': 'Failed to create trainer profile', 'details': str(e)},
                status=status.HTTP_400_BAD_REQUEST
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
                    <p>Hi C.{user.name},</p>
                    <p>Please click the link below to activate your FitConnect account:</p>
                    <p><a href="{activation_link}">Activate Account</a></p>
                    <p>If you didn’t request this, you can ignore this email.</p>
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
    try:
        user = CustomUser.objects.create(
            email=data['email'],
            name=f"{data['first_name']} {data['last_name']}",
            password=make_password(data['password']),
            role='trainer',
            is_active=False
        )

        TrainerProfile.objects.create(
            user=user,
            first_name=data['first_name'],
            last_name=data['last_name'],
            bio=data.get('bio', ''),
            experience_years=data.get('experience_years', 0),
            specialties=data.get('specialties', 'fitness')
        )

        send_activation_email(user, request)

        return Response({'message': 'User registered successfully'}, status=201)
    except Exception as e:
        return Response({'error': str(e)}, status=400)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def activate_user(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = CustomUser.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect('http://localhost:5173/login')
    else:
        return Response({'error': 'Activation link is invalid!'}, status=400)