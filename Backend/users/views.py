from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Paciente
from .models import Medico
from .serializers import PacienteSerializer
from .serializers import MedicoSerializer
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import logout
from rest_framework import views

# Register API ==> http://127.0.0.1:8000/api/paciente/signup/
class PacienteSignupView(APIView):    
    queryset = Paciente.objects.all()    
    serializer_class = PacienteSerializer
    def post(self, request):
        serializer = PacienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(password_p=make_password(request.data['password_p']))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login API ==> http://127.0.0.1:8000/api/paciente/login/
class PacienteLoginView(APIView):
    def post(self, request):
        cuil = request.data['cuil']
        password = request.data['password_p']
        paciente = Paciente.objects.get(cuil=cuil)
        if check_password(password, paciente.password_p):
            serializer = PacienteSerializer(paciente)
            return Response(serializer.data)
        return Response("Credenciales inválidas", status=status.HTTP_401_UNAUTHORIZED)

# ==> http://127.0.0.1:8000/api/paciente/1/
class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer 
    
    
# Register API ==> http://127.0.0.1:8000/api/medico/signup/
class MedicoSignupView(APIView):    
    queryset = Medico.objects.all()    
    serializer_class = MedicoSerializer
    def post(self, request):
        serializer = MedicoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(password_m=make_password(request.data['password_m']))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login API ==> http://127.0.0.1:8000/api/medico/login/
class MedicoLoginView(APIView):
    def post(self, request):
        matricula = request.data['matricula']
        password = request.data['password_m']
        medico = Medico.objects.get(matricula=matricula)
        if check_password(password, medico.password_m):
            serializer = MedicoSerializer(medico)
            return Response(serializer.data)
        return Response("Credenciales inválidas", status=status.HTTP_401_UNAUTHORIZED)

# ==> http://127.0.0.1:8000/api/Medico/1/
class MedicoViewSet(viewsets.ModelViewSet):
    queryset = Medico.objects.all()
    serializer_class = MedicoSerializer 



class LogoutView(views.APIView):
    def post(self, request):
        logout(request)
        return Response({'message': "Logout successful"})
####################################################################
############################## OLD #################################
####################################################################
    
## Vistas antiguas

# class LogoutView(APIView):
#     def post(self, request):
#         logout(request)

#         return Response(status=status.HTTP_200_OK)

# class LoginView(APIView):
#     permission_classes = [AllowAny]
#     def post(self, request):
#         # Recuperamos las credenciales y autenticamos al usuario
#         cuil = request.data.get('cuil', None)
#         password = request.data.get('password_p', None)
#         user = authenticate(cuil=cuil, password=password)
#         # Si es correcto añadimos a la request la información de sesión
#         if user:
#             login(request, user)
#             return Response(
#                 PacienteSerializer(user).data,
#                 status=status.HTTP_200_OK)
#         # Si no es correcto devolvemos un error en la petición
#         return Response(
#             status=status.HTTP_404_NOT_FOUND)
    
# # class LogoutView(APIView):
# #     def post(self, request):
# #         logout(request)

# #         return Response(status=status.HTTP_200_OK)

# # class SignupView(generics.CreateAPIView):
# #     serializer_class = UserSerializer