from rest_framework import viewsets
from .models import CoachProfile
from .serializers import CoachProfileSerializer
# from rest_framework_simplejwt.authentication import JWTAuthentication
# from rest_framework.permissions import IsAuthenticated


class CoachProfileViewSet(viewsets.ModelViewSet):
    queryset = CoachProfile.objects.all()
    serializer_class = CoachProfileSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

# Create your views here.
