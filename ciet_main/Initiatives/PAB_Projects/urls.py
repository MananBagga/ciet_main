from django.urls import path
from . import views

urlpatterns = [
    path('pab_projects/', views.pab_projects, name='pab_projects')
]
