from django.urls import path
from . import views

urlpatterns = [
    path('', views.evidya_dth, name='evidya_dth'), 
]