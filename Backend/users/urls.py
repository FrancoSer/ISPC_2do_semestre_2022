from django.urls import path
from .views import LoginView, LogoutView, SignupView


urlpatterns = [
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/signup/', SignupView.as_view(), name='auth_signup'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    
]