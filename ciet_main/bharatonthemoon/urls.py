from django.urls import path
from . import views

urlpatterns = [
    path('bharatonthemoon/', views.bharatonthemoon, name='bharatonthemoon'),
]