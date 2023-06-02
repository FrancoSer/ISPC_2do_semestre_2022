from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser
#from datetime import timedelta     # Sumar periodos de tiempo

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']

class Paciente(models.Model):
    cuil = models.CharField(max_length=11)
    nacimiento_p = models.DateField()
    nombre_p = models.CharField(max_length=30)
    apellido_p = models.CharField(max_length=30)
    telefono_p = models.CharField(max_length=20)
    direccion_p = models.CharField(max_length=40)
    mail_p = models.CharField(max_length=30)
    GENERO_OPCIONES = (
        ('Masculino', 'Masculino'),
        ('Femenino', 'Femenino'),
        ('Otro', 'Otro'),
    )
    genero_p = models.CharField(max_length=9, choices=GENERO_OPCIONES)
    SANGRE_OPCIONES = (
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('0+', '0+'),
        ('0-', '0-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
    )
    sangre = models.CharField(max_length=3, choices=SANGRE_OPCIONES)
    password_p = models.CharField(max_length=20)
    premium = models.BooleanField(default=False)

class Medico(models.Model):
    matricula = models.CharField(max_length=10)
    nacimiento_m = models.DateField()
    nombre_m = models.CharField(max_length=30)
    apellido_m = models.CharField(max_length=30)
    telefono_m = models.CharField(max_length=20)
    direccion_m = models.CharField(max_length=40)
    mail_m = models.CharField(max_length=30)
    GENERO_OPCIONES = (
        ('Masculino', 'Masculino'),
        ('Femenino', 'Femenino'),
        ('Otro', 'Otro'),
    )
    genero_m = models.CharField(max_length=20, choices=GENERO_OPCIONES)
    password_m = models.CharField(max_length=20)

class Historia(models.Model):
    fecha_h = models.DateField(default=datetime.now)
    referencia_h = models.CharField(max_length=20, blank=True)
    especialidad = models.CharField(max_length=30)
    diagnostico = models.CharField(max_length=50, blank=True)
    antecedentes = models.CharField(max_length=255, blank=True)
    presion = models.CharField(max_length=10, blank=True)
    peso = models.CharField(max_length=10, blank=True)
    altura = models.CharField(max_length=10, blank=True)
    prueba_diagnostica = models.CharField(max_length=30, blank=True)
    medicacion = models.CharField(max_length=50, blank=True)
    dieta = models.CharField(max_length=100, blank=True)
    vacuna = models.CharField(max_length=50, blank=True)
    proxima_visita = models.CharField(max_length=20, blank=True)
    observaciones = models.CharField(max_length=255, blank=True)
    adjunto = models.CharField(max_length=255, blank=True)
  
class HistoriaClinica(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_medico = models.ForeignKey(Medico, on_delete=models.CASCADE)
    id_historia = models.ForeignKey(Historia, on_delete=models.CASCADE)

class Factura(models.Model):
    total = models.FloatField()
    extras = models.FloatField(blank=True)
    alta = models.DateField(default=datetime.now)
    baja_duracion_dias = models.IntegerField()
#    baja_duracion_meses = models.IntegerField() # Generar formula para que se ingresen los valores * 31 dias

class Servicio(models.Model):
    nombre = models.CharField(max_length=20)
    duracion_meses = models.IntegerField()
    valor = models.FloatField()

class ServicioFactura(models.Model):
    id_paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE)
    id_servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    id_factura = models.ForeignKey(Factura, on_delete=models.CASCADE)