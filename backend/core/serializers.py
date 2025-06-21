from rest_framework import serializers
from .models import TrainingPrograms

class TrainingProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingPrograms
        fields = '__all__'