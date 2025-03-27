from django.urls import path
from api.views import DjangoAPI

urlpatterns = [
    path('DjangoAPI/', DjangoAPI , name='DjangoAPI'),
]