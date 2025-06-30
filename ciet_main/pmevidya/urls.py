from django.urls import path
from . import views

urlpatterns = [
    path('pm_evidya/', views.pmevidya, name='pmevidya')
]
