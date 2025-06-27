from django.urls import path
from . import views

urlpatterns = [
    path('', views.bharatonthemoon, name='bharatonthemoon'),
]