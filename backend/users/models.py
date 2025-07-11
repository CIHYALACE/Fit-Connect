import json
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import RegexValidator

USER_ROLE_CHOICES = [
    ("admin", "Admin"),
    ("trainer", "trainer")
]

trainer_PERMISSIONS = [
    'view_own_profile',
    'edit_own_profile',
    'view_clients',
    'manage_clients',
    'create_workouts',
    'edit_workouts',
]

COUCH_SPECIALTIES_CHOICES =[
    ("fitness", "Fitness"),
    ("bodybuliding", "Body Building")
]

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', 'admin')
        return self.create_user(email, name, password, **extra_fields)

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    role = models.CharField(max_length=50, choices=USER_ROLE_CHOICES)
    phone_number = models.CharField(
        blank=True, 
        null=True, 
        unique=True, 
        max_length=11,
        validators=[
            RegexValidator(
                regex=r'^01\d{9}$',
                message="Phone number must be 11 digits and start with '01'.",
                code='invalid_phone_number'
            )
        ]
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

    def has_trainer_permission(self, permission):
        if self.is_superuser:
            return True
        if self.role == 'trainer' and permission in trainer_PERMISSIONS:
            return True
        return False

class TrainerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='trainer_profile')
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    bio = models.TextField()
    experience_years = models.IntegerField()
    picture = models.ImageField(upload_to='trainer_profiles/', blank=True, null=True)
    specialties = models.TextField(choices=COUCH_SPECIALTIES_CHOICES)
    certification = models.FileField(upload_to='certifications/', blank=True, null=True)
    gym = models.ForeignKey('core.Gym', on_delete=models.SET_NULL, null=True, blank=True, related_name='trainers')
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        permissions = [
            ("view_own_profile", "Can view own trainer profile"),
            ("edit_own_profile", "Can edit own trainer profile"),
            ("view_clients", "Can view assigned clients"),
            ("manage_clients", "Can manage assigned clients"),
            ("create_workouts", "Can create workout plans"),
            ("edit_workouts", "Can edit workout plans"),
        ]