from django.urls import path
from . import views

urlpatterns = [
    path('webinars/', views.webinars, name='webinars')
]
