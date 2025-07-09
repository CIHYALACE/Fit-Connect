from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainerProfileViewSet, register_user, activate_user

router = DefaultRouter()
router.register(r'trainers_list', TrainerProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('trainers_list/<int:pk>', TrainerProfileViewSet.as_view({'get':'retrieve'}), name='trainer_profile_detail'),
    path('register/', register_user, name='register_user'),
    path('activate/<uidb64>/<token>/', activate_user, name='activate_user')
]
