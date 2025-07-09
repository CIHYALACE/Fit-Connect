from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import TrainerProfile, CustomUser
from .serializers import TrainerProfileSerializer
from django.contrib.auth.hashers import make_password



class TrainerProfileViewSet(viewsets.ModelViewSet):
    queryset = TrainerProfile.objects.all()
    serializer_class = TrainerProfileSerializer

    def get_permissions(self):
        if self.request.method in ['GET', 'HEAD', 'OPTIONS']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]


@api_view(['POST'])
def register_user(request):
    data = request.data
    try:
        # Create user
        user = CustomUser.objects.create(
            email=data['email'],
            name=f"{data['firstName']} {data['lastName']}",
            password=make_password(data['password']),
            role='trainer'
        )

        # Create trainer profile
        TrainerProfile.objects.create(
            user=user,
            first_name=data['firstName'],
            last_name=data['lastName'],
            bio="",
            experience_years=0,
            specialties="fittnes"
        )

        return Response({'message': 'User registered successfully'}, status=201)
    except Exception as e:
        return Response({'error': str(e)}, status=400)