from django.urls import path
from . import views

urlpatterns = [
    path('epathshala/', views.epathshala, name='epathshala')
]
