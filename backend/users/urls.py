from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainerProfileViewSet

router = DefaultRouter()
router.register(r'trainers_list', TrainerProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('trainers_list/<int:pk>', TrainerProfileViewSet.as_view({'get':'retrieve'}), name='trainer_profile_detail')
]
