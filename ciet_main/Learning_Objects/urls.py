from django.urls import path
from . import views

urlpatterns = [
    path('', views.learning_objects, name='learning_objects')
]
