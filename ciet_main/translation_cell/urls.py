from django.urls import path
from . import views

urlpatterns = [
    path('', views.translation_cell, name='translation_cell'),
]