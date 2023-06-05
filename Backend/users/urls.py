from django.urls import path, include
from .views import LoginView
from . import views
from rest_framework import routers

router=routers.DefaultRouter()
router.register(r'paciente',views.PacienteViewSet)
urlpatterns = [
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    # path('auth/signup/', SignupView.as_view(), name='auth_signup'),
    # path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('',include(router.urls)),
    
    
]