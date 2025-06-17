from django.urls import path
from . import views

urlpatterns = [
    path('', views.tv_channels, name='tv_channels')
]
