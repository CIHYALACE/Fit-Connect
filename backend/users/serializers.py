from rest_framework import serializers
from .models import CoachProfile

class CoachProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachProfile
        fields = '__all__'