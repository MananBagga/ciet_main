from django.urls import path
from . import views

urlpatterns = [
    path('rti/', views.rti, name='rti')
]
