from django.urls import path
from . import views

urlpatterns = [
    path('conference_video/', views.conference_video, name='conference_video'),
]