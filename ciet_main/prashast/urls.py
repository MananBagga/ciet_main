from django.urls import path
from . import views

urlpatterns = [
    path('prashast/', views.prashast, name='prashast'),
]