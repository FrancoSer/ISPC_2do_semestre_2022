from rest_framework import serializers
from .models import Paciente
from .models import Medico
from .models import Factura
from .models import Carrito
from django.contrib.auth.hashers import make_password


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = '__all__'
        
class MedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medico
        fields = '__all__'
        
class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Factura
        fields = '__all__'
        
class CarritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields = ['id', 'paciente', 'servicio', 'created_at', 'updated_at']

####################################################################
############################## OLD #################################
####################################################################

# class PacienteSerializer(serializers.ModelSerializer):
#     # mail_p = serializers.EmailField(required=True)
#     # password = serializers.CharField(min_length=8)
#     # cuil = serializers.CharField(required=False, allow_blank=True, max_length=100)
    
#     class Meta:
#         model = Paciente
#         fields = '__all__'
        
#     # def validate_password(self, value):
#     #     return make_password(value)

# Paciente Serializer



