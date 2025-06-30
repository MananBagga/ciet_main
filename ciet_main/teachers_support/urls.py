from django.urls import path
from . import views

urlpatterns = [
    path('teachers_support/', views.teachers_support, name='teachers_support'),
]