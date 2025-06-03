from django.db import models
from django.contrib.auth.models import User

# Create your models here.

USER_ROLE_CHOICES = [
    ("admin", "Admin"),
    ("couch", "Couch")
]

SPECIALIZATION_CHOICES = [

]

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(choices=USER_ROLE_CHOICES)

    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name} - {self.role}'
    
class CouchProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField()
    experience_years = models.IntegerField(max_length=2)
    specialization = models.CharField(choices=SPECIALIZATION_CHOICES)
    photo = models.ImageField(upload_to=None)
    phone_number = models.CharField()
    
