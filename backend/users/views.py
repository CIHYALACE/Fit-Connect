from rest_framework import viewsets
from .models import TrainerProfile
from .serializers import TrainerProfileSerializer
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework.permissions import IsAuthenticated


class TrainerProfileViewSet(viewsets.ModelViewSet):
    queryset = TrainerProfile.objects.all()
    serializer_class = TrainerProfileSerializer

