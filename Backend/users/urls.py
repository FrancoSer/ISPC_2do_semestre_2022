from django.urls import path, include
# from .views import LoginView
from . import views
from rest_framework import routers
from .views import PacienteSignupView, MedicoSignupView, LogoutView
from .views import PacienteLoginView, MedicoLoginView, FacturaViewSet

router = routers.DefaultRouter()
router.register(r'paciente', views.PacienteViewSet)
router.register(r'medico', views.MedicoViewSet)
router.register(r'carrito', views.CarritoViewSet)
router.register(r'factura', views.FacturaViewSet)

urlpatterns = [
    path('paciente/signup/', PacienteSignupView.as_view(), name='paciente_signup'),
    path('paciente/login/', PacienteLoginView.as_view(), name='paciente_login'),
    path('medico/signup/', MedicoSignupView.as_view(), name='medico_signup'),
    path('medico/login/', MedicoLoginView.as_view(), name='medico_login'),
    path('paciente/logout/', LogoutView.as_view(), name='paciente_logout'),
    path('medico/logout/', LogoutView.as_view(), name='medico_logout'),
    # path('paciente/factura/', FacturaViewSet.as_view(), name='factura'),        
    path('', include(router.urls)),
    
]
