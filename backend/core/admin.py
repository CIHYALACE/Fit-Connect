from django.contrib import admin
from .models import TrainingPrograms, TrainerRating, ProgramRating, Gym

# Register your models here.
admin.site.register(TrainingPrograms)
admin.site.register(ProgramRating)
admin.site.register(Gym)

class TrainerRatingAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.ip_address:
            obj.ip_address = request.META.get('REMOTE_ADDR', '127.0.0.1')
        super().save_model(request, obj, form, change)

admin.site.register(TrainerRating, TrainerRatingAdmin)