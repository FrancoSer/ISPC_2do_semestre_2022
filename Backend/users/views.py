from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Paciente
from .models import Medico
from .models import Factura
from .models import Carrito
from .serializers import PacienteSerializer
from .serializers import MedicoSerializer
from .serializers import FacturaSerializer
from .serializers import CarritoSerializer
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import logout
from rest_framework import views
from rest_framework.decorators import action
from .helpers import CartHelper

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

class FacturaViewSet(viewsets.ModelViewSet):
    queryset = Factura.objects.all()
    serializer_class = FacturaSerializer
    
class CarritoViewSet(viewsets.ModelViewSet):
    queryset = Carrito.objects.all().order_by('id')
    serializer_class = CarritoSerializer

    @action(methods=['get'], detail=False, url_path='checkout/(?P<userId>[^/.]+)', url_name='checkout')
    def checkout(self, request, *args, **kwargs):

        try:
            user = Paciente.objects.get(pk=int(kwargs.get('userId')))
        except Exception as e:
            return Response(status=status.HTTP_404_NOT_FOUND,
                            data={'Error': str(e)})

        cart_helper = CartHelper(user)
        checkout_details = cart_helper.prepare_cart_for_checkout()

        if not checkout_details:
            return Response(status=status.HTTP_404_NOT_FOUND,
                            data={'error': 'Carrito Vacio.'})

        return Response(status=status.HTTP_200_OK, data={'checkout_details': checkout_details})
    
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