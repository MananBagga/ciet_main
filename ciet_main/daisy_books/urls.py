from django.urls import path
from . import views

urlpatterns = [
    path('daisy_books/', views.daisy_books, name='daisy_books'),
]