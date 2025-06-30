from django.urls import path
from . import views

urlpatterns = [
    path('unesco/', views.unesco, name='unesco')
]
