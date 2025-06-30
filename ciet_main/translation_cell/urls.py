from django.urls import path
from . import views

urlpatterns = [
    path('translation_cell/', views.translation_cell, name='translation_cell'),
]