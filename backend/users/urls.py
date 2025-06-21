from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CoachProfileViewSet

router = DefaultRouter()
router.register(r'couches_list', CoachProfileViewSet)

urlpatterns = [
    path('', include(router.urls))
]
