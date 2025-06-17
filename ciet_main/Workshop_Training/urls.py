from django.urls import path
from . import views

urlpatterns = [
    path('', views.workshop_training, name='workshop_training')
]
