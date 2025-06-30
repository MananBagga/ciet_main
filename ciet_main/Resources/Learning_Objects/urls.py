from django.urls import path
from . import views

urlpatterns = [
    path('learning_objects/', views.learning_objects, name='learning_objects')
]
