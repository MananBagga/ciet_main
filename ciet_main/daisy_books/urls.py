from django.urls import path
from . import views

urlpatterns = [
    path('', views.daisy_books, name='daisy_books'),
]