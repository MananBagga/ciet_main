from django.urls import path
from . import views

urlpatterns = [
    path('', views.audio_books, name='audio_books')
]
