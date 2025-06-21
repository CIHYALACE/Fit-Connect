from rest_framework import viewsets
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import TrainingPrograms
from .serializers import TrainingProgramSerializer

class TrainingProgramsViewSet(viewsets.ModelViewSet):
    queryset = TrainingPrograms.objects.all()
    serializer_class = TrainingProgramSerializer