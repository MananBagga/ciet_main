from django.urls import path
from . import views

urlpatterns = [
    path('tv_channels/', views.tv_channels, name='tv_channels')
]
