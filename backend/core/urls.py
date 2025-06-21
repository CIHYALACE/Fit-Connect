from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainingProgramsViewSet

router = DefaultRouter()
router.register(r'training_programs', TrainingProgramsViewSet)

urlpatterns = [
    path('', include(router.urls))
]
