from django.urls import path
from . import views

urlpatterns = [
    path('', views.webinars, name='webinars')
]
