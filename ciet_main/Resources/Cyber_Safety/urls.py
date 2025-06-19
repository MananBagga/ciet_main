from django.urls import path
from . import views

urlpatterns = [
    path('', views.cyber_safety_security, name='cyber_safety_security')
]
