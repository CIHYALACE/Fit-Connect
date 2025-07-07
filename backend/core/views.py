from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import TrainingPrograms, TrainerRating, ProgramRating, Gym
from .serializers import TrainingProgramSerializer, TrainerRatingSerializer, ProgramRatingSerializer, GymSerializer
from .utils import get_client_ip

class TrainingProgramsViewSet(viewsets.ModelViewSet):
    queryset = TrainingPrograms.objects.all()
    serializer_class = TrainingProgramSerializer

class GymViewSet(viewsets.ModelViewSet):
    queryset = Gym.objects.prefetch_related('trainers').all()
    serializer_class = GymSerializer


class TrainerRatingViewSet(viewsets.ModelViewSet):
    queryset = TrainerRating.objects.all()
    serializer_class = TrainerRatingSerializer

    def perform_create(self, serializer):
        ip = self.request.META.get('REMOTE_ADDR')
        serializer.save(ip_address=ip)

    def create(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        trainer_id = request.data.get('trainer')

        if TrainerRating.objects.filter(trainer_id=trainer_id, ip_address=ip).exists():
            return Response({'detail': 'You have already rated this trainer.'}, status=400)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(ip_address=ip)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class ProgramRatingViewSet(viewsets.ModelViewSet):
    queryset = ProgramRating.objects.all()
    serializer_class = ProgramRatingSerializer

    def create(self, request, *args, **kwargs):
        ip = get_client_ip(request)
        program_id = request.data.get('program')

        if TrainerRating.objects.filter(program_id=program_id, ip_address=ip).exists():
            return Response({'detail': 'You have already rated this trainer.'}, status=400)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(ip_address=ip)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)