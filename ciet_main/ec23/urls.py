from django.urls import path
from . import views
urlpatterns = [
    path('', views.ec23, name='ec23'),
    
]