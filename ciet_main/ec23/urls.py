from django.urls import path
from . import views
urlpatterns = [
    path('ec23/', views.ec23, name='ec23'),
    
]