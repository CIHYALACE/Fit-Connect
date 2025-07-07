from rest_framework import serializers
from .models import TrainingPrograms, TrainerRating, ProgramRating, Gym
from users.serializers import TrainerProfileSerializer

class TrainingProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingPrograms
        fields = '__all__'

class TrainerRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainerRating
        fields = ['trainer', 'rating', 'review', 'ip_address']
        extra_kwargs = {'ip_address': {'read_only': True}}

class ProgramRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramRating
        fields = ['program', 'rating', 'review']

class GymSerializer(serializers.ModelSerializer):
    trainers = TrainerProfileSerializer(many=True, read_only=True)

    class Meta:
        model = Gym
        fields = ['name', 'address', 'latitude', 'longitude', 'trainers']