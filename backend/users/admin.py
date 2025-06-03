from django.contrib import admin
from .models import UserProfile, CouchProfile
# Register your models here.

admin.site.register(UserProfile)
admin.site.register(CouchProfile)