from django.db import models
from django.contrib.auth.models import User
from django.core.validators import RegexValidator


COACH_SPECIALTIES_CHOICES =[
    ("fitness", "Fitness"),
    ("bodybuilding", "Body Building")
]

egypt_phone_validator = RegexValidator(
    regex=r'^01[0125][0-9]{8}$',
    message="Enter a valid 11-digit Egyptian mobile number starting with 010, 011, 012, or 015."
)

class Trainer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='trainer_profile')
    bio = models.TextField(max_length=1000, blank=True)
    experience_years = models.PositiveIntegerField()
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    specialties = models.CharField(max_length=20, choices=COACH_SPECIALTIES_CHOICES, default='fitness')
    certification = models.FileField(upload_to='certifications/', blank=True, null=True)
    phone_number = models.CharField(max_length=11, validators=[egypt_phone_validator], blank=True, null=True)
    gym = models.ForeignKey('core.Gym', on_delete=models.SET_NULL, null=True, blank=True, related_name='trainers')
    is_verified = models.BooleanField(default=False)

    @property
    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"

    def __str__(self):
        return self.full_name
    

    class Meta:
        verbose_name = "Trainer Profile"
        verbose_name_plural = "Trainer Profiles"