from django.urls import path
from . import views

urlpatterns = [
    path('cyber_safety_security/', views.cyber_safety_security, name='cyber_safety_security')
]
