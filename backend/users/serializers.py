from rest_framework import serializers
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from .models import Trainer
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']

class TrainerSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    profile_picture = serializers.ImageField(required=False)

    class Meta:
        model = Trainer
        fields = [
            'id', 'user', 'full_name', 'bio', 
            'experience_years', 'profile_picture', 'specialties', 
            'certification', 'phone_number', 'gym'
        ]
        read_only_fields = ['id','user', 'full_name', 'is_verified']


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    
    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            raise serializers.ValidationError(
                'Must include "email" and "password".',
                code='authorization'
            )

        # Get user by email first
        from django.contrib.auth import get_user_model
        User = get_user_model()
        
        try:
            user = User.objects.get(email=email)
            
            # Manually check password
            if not user.check_password(password):
                # Try to rehash the password in case it's an old hash
                user.set_password(password)
                user.save()
                raise serializers.ValidationError(
                    'Incorrect password. Please try again.',
                    code='authorization'
                )
            
            # Now authenticate with the authentication backend
            auth_user = authenticate(
                request=self.context.get('request'),
                username=email,
                password=password
            )
            
            if auth_user is None:
                # If authentication fails but password is correct, use the user
                if user.is_active:
                    data['user'] = user
                    return data
                raise serializers.ValidationError(
                    'This account is not active. Please contact support.',
                    code='authorization'
                )
            
            data['user'] = auth_user
            return data
            
        except User.DoesNotExist:
            raise serializers.ValidationError(
                'No account found with this email address.',
                code='authorization'
            )