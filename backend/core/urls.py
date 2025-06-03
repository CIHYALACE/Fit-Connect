from django.urls import path
from core.views import DjangoAPI, index

urlpatterns = [
    path('', index, name='index'),
    path('DjangoAPI/', DjangoAPI , name='DjangoAPI'),
]