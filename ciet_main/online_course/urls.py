from django.urls import path
from . import views

urlpatterns = [
    path ('online_course/', views.online_course, name='online_course'),
]