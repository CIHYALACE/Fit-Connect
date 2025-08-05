from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TrainerViewSet, 
    register_user, 
    activate_user, 
    user_login, 
    add_trainer_to_odoo
)

router = DefaultRouter()
router.register(r'trainers_list', TrainerViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('trainers_list/<int:pk>', TrainerViewSet.as_view({'get':'retrieve'}), name='trainer_profile_detail'),
    path('register/', register_user, name='register_user'),
    path('activate/<uidb64>/<token>/', activate_user, name='activate_user'),
    path('login/', user_login, name='user_login'),
    path('sync-trainer/<int:trainer_id>/', add_trainer_to_odoo, name='sync_trainer'),
]
