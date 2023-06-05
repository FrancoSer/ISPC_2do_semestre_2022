from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PacienteSerializer
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from .models import Paciente
from rest_framework import viewsets


class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    
    

class LoginView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        # Recuperamos las credenciales y autenticamos al usuario
        cuil = request.data.get('cuil', None)
        password = request.data.get('password_p', None)
        user = authenticate(cuil=cuil, password=password)
        # Si es correcto añadimos a la request la información de sesión
        if user:
            login(request, user)
            return Response(
                PacienteSerializer(user).data,
                status=status.HTTP_200_OK)
        # Si no es correcto devolvemos un error en la petición
        return Response(
            status=status.HTTP_404_NOT_FOUND)
    
# class LogoutView(APIView):
#     def post(self, request):
#         logout(request)

#         return Response(status=status.HTTP_200_OK)

# class SignupView(generics.CreateAPIView):
#     serializer_class = UserSerializer