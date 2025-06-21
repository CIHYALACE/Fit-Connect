from django.db import models
from users.models import CoachProfile


DIFFICULTY_COICES = [
    ("begginer","Beginner"),
    ("intermediate", "Intermediate"),
    ("advanced", "Advanced")
]
class TrainingPrograms(models.Model):
    title = models.CharField(max_length=100)
    auther = models.ForeignKey(CoachProfile, on_delete=models.CASCADE)
    duration = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    difficulty_level = models.CharField(choices=DIFFICULTY_COICES, max_length=100)
    image = models.ImageField(upload_to='training_programs/')
    
    def __str__(self):
        return self.title