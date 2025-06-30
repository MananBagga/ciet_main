from django.urls import path
from . import views

urlpatterns = [
    path('audio_books/', views.audio_books, name='audio_books')
]
