from django.urls import path
from . import views
urlpatterns = [
    path('', views.galleryec23, name='galleryec23'),
    
]