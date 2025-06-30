from django.urls import path
from . import views

urlpatterns = [
    path('major_projects/', views.majorProjects, name='majorProjects'),
]