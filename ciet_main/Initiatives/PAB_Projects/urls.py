from django.urls import path
from . import views

urlpatterns = [
    path('', views.pab_projects, name='pab_projects')
]
