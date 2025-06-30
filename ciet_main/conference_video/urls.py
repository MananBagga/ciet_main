from django.urls import path
from . import views

urlpatterns = [
    path('conference_video/', views.conference_video, name='conference_video'),
    path('conference_2/', views.conference_2, name='conference_2'),
]