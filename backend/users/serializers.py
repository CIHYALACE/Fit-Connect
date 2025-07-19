from rest_framework import serializers
from .models import Trainer

class TrainerSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(required=False)

    class Meta:
        model = Trainer
        fields = [
            'id', 'user', 'full_name', 'bio', 
            'experience_years', 'profile_picture', 'specialties', 
            'certification', 'phone_number', 'gym'
        ]
        read_only_fields = ['id','user', 'full_name', 'is_verified']