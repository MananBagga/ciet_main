from django.urls import path
from . import views

urlpatterns = [
    path('satellite/', views.satellite, name='satellite')
]
