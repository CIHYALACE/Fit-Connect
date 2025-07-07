from rest_framework import serializers
from .models import TrainerProfile

class TrainerProfileSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.email', read_only=True)
    class Meta:
        model = TrainerProfile
        fields = '__all__'