from django.urls import path
from . import views

urlpatterns = [
    path('', views.teachers_support, name='teachers_support'),
]