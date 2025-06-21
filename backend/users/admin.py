from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, CoachProfile

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'name', 'role', 'is_active', 'is_staff')
    list_filter = ('role', 'is_active', 'is_staff')
    ordering = ('email',)
    search_fields = ('email', 'name')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('name', 'role', 'phone_number')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
    )
    
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'name', 'password1', 'password2', 'role'),
        }),
    )

class CoachProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'experience_years', 'is_verified')
    list_filter = ('is_verified', 'experience_years')
    search_fields = ('first_name', 'last_name', 'user__email')
    # readonly_fields = ('user',)

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(CoachProfile, CoachProfileAdmin)