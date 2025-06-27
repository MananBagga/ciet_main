from django.urls import path
from . import views

urlpatterns = [
    path('', views.barkhaa, name='barkhaa'),
]
