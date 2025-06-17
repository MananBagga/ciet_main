from django.urls import path
from . import views

urlpatterns = [
    path('', views.counselling_services, name='counselling_services')
]
