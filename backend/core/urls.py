from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainingProgramsViewSet, TrainerRatingViewSet, ProgramRatingViewSet, GymViewSet

router = DefaultRouter()
router.register(r'training_programs', TrainingProgramsViewSet)
router.register(r'trainer_ratings', TrainerRatingViewSet)
router.register(r'program_ratings', ProgramRatingViewSet)
router.register(r'gyms_list', GymViewSet)

urlpatterns = [
    path('', include(router.urls))
]
