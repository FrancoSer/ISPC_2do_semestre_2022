from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from .models import Paciente, Medico, Historia, HistoriaClinica, Factura, Servicio, CustomUser

# Register your models here.
@admin.register(get_user_model())
class CustomUserAdmin(UserAdmin):
    pass



admin.site.register(Paciente)
admin.site.register(Medico)
admin.site.register(Historia)
admin.site.register(HistoriaClinica)
admin.site.register(Factura)
admin.site.register(Servicio)