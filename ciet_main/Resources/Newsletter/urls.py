from django.urls import path
from . import views

urlpatterns = [
    path('Newsletters/', views.newsletter, name='newsletter')
]
