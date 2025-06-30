from django.urls import path
from . import views

urlpatterns = [
    path('ejaadui_pitara/', views.ejaadui_pitara, name='ejaadui_pitara'),
]