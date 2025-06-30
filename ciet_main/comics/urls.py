from django.urls import path
from . import views

urlpatterns = [
    path('comics/', views.comics, name='comics'),
]