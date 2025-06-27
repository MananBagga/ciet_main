from django.urls import path
from . import views

urlpatterns = [
    path('', views.special_econtent, name='special_econtent'),  
]