from django.urls import path
from core.views import DjangoAPI

urlpatterns = [
    path('DjangoAPI/', DjangoAPI , name='DjangoAPI'),
]