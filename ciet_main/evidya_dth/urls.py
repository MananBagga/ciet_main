from django.urls import path
from . import views

urlpatterns = [
    path('evidya_dth/', views.evidya_dth, name='evidya_dth'), 
]