from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Paciente, Medico, Historia, HistoriaClinica, Factura, Servicio, CustomUser
# Register your models here.



admin.site.register(CustomUser,UserAdmin)
admin.site.register(Paciente)
admin.site.register(Medico)
admin.site.register(Historia)
admin.site.register(HistoriaClinica)
admin.site.register(Factura)
admin.site.register(Servicio)