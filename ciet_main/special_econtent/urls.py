from django.urls import path
from . import views

urlpatterns = [
    path('special_econtent/', views.special_econtent, name='special_econtent'),  
]