from django.db import models

# Create your models here.
class Paciente(models.Model):
    cuil = models.CharField(max_length=100)
    name_p = models.CharField(max_length=100)
    nacimiento = models.DateField(max_length=100)
    apellido_p = models.CharField(max_length=100)
    telefono_p = models.CharField(max_length=100)
    direccion_p = models.CharField(max_length=100)
    mail_p = models.CharField(max_length=100)
    genero_p = models.CharField(max_length=100)
    password_p = models.CharField(max_length=100)
    premium_p = models.CharField(max_length=100)
    mail_p = models.CharField(max_length=100)
  