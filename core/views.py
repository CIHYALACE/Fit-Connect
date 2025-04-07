from django.http import JsonResponse
# Create your views here.


def DjangoAPI(request):
        return JsonResponse({"message": "Hello from Django!"})
