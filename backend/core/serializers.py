from rest_framework import serializers
from .models import TrainingPrograms, TrainerRating, ProgramRating

class TrainingProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainingPrograms
        fields = '__all__'

class TrainerRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainerRating
        fields = ['trainer', 'rating', 'review']

class ProgramRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = TrainerRating
        fields = ['program', 'rating', 'review']