from django.urls import path
from . import views

urlpatterns = [
    path('', views.ejaadui_pitara, name='ejaadui_pitara'),
]