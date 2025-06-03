from django.db import models
from users.models import CouchProfile


DIFFICULTY_COICES = [
    ("begginer","Beginner"),
    ("intermediate", "Intermediate"),
    ("advanced", "Advanced")
]
class TrainingPrograms(models.Model):
    title = models.CharField(max_length=100)
    auther = models.ForeignKey(CouchProfile, on_delete=models.CASCADE)
    duration = models.CharField()
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    difficulty_level = models.CharField(choices=DIFFICULTY_COICES)
    image = models.ImageField(upload_to=None)