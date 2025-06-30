from django.urls import path
from . import views

urlpatterns = [
    path('conference/', views.conference, name='conference')
]
