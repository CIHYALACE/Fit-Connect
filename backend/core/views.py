from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
# Create your views here.


def index(request):
        return HttpResponse('<h1>Public Index<h1>')

def DjangoAPI(request):
        return JsonResponse({"message": "Hello from Django!"})
