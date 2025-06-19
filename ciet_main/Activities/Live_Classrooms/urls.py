from django.urls import path
from . import views

urlpatterns = [
    path('', views.live_classrooms, name='live_classrooms')
]
