from rest_framework import serializers
from .models import CoachProfile

class CoachProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.email', read_only=True)
    class Meta:
        model = CoachProfile
        fields = '__all__'