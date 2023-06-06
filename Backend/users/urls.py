from django.urls import path, include
# from .views import LoginView
from . import views
from rest_framework import routers
from .views import PacienteSignupView, MedicoSignupView
from .views import PacienteLoginView, MedicoLoginView

router=routers.DefaultRouter()
router.register(r'paciente',views.PacienteViewSet)
router.register(r'medico',views.MedicoViewSet)
urlpatterns = [
    path('paciente/signup/', PacienteSignupView.as_view(), name='paciente_signup'),
    path('paciente/login/', PacienteLoginView.as_view(), name='paciente_login'),
    path('medico/signup/', MedicoSignupView.as_view(), name='medico_signup'),
    path('medico/login/', MedicoLoginView.as_view(), name='medico_login'),
    path('',include(router.urls)),
]