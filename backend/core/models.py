from django.db import models

class TrainingPrograms(models.Model):
    name = models.CharField(max_length=100)
    # auther = models.ForeignKey(to=Couches)
    duration = models.CharField()
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)