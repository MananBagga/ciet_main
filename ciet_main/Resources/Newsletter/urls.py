from django.urls import path
from . import views

urlpatterns = [
    path('newsletters/', views.newsletter, name='newsletter')
]
