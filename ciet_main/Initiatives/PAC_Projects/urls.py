from django.urls import path
from . import views

urlpatterns = [
    path('pac_projects/', views.pac_projects, name='pac_projects')
]
