from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Training Program
# TrainerRating
# ProgramRating
# TrainerGym

DIFFICULTY_COICES = [
    ("begginer","Beginner"),
    ("intermediate", "Intermediate"),
    ("advanced", "Advanced")
]
class TrainingPrograms(models.Model):
    title = models.CharField(max_length=100)
    auther = models.ForeignKey('users.TrainerProfile', on_delete=models.CASCADE)
    duration = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    difficulty_level = models.CharField(choices=DIFFICULTY_COICES, max_length=100)
    image = models.ImageField(upload_to='training_programs/')
    
    def __str__(self):
        return self.title
    
class TrainerRating(models.Model):
    trainer = models.ForeignKey('users.TrainerProfile', on_delete=models.CASCADE, related_name='ratings')
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.TextField(blank=True)
    ip_address = models.GenericIPAddressField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('trainer', 'ip_address')

class ProgramRating(models.Model):
    program = models.ForeignKey(TrainingPrograms, on_delete=models.CASCADE, related_name='ratings')
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review = models.TextField(blank=True)
    ip_address = models.GenericIPAddressField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('program', 'ip_address')

class Gym(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6,validators=[MinValueValidator(-90.0), MaxValueValidator(90.0)])
    longitude = models.DecimalField(max_digits=9, decimal_places=6,validators=[MinValueValidator(-180.0), MaxValueValidator(180.0)])
