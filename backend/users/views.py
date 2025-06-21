from rest_framework import viewsets
from .models import CoachProfile
from .serializers import CoachProfileSerializer


class CoachProfileViewSet(viewsets.ModelViewSet):
    queryset = CoachProfile.objects.all()
    serializer_class = CoachProfileSerializer

# Create your views here.
