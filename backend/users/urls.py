from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoachProfileViewSet

router = DefaultRouter()
router.register(r'coaches_list', CoachProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('coaches_list/<int:pk>', CoachProfileViewSet.as_view({'get':'retrieve'}), name='coach_profile_detail')
]
