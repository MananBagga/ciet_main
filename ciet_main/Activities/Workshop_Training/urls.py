from django.urls import path
from . import views

urlpatterns = [
    path('workshop_training/', views.workshop_training, name='workshop_training')
]
