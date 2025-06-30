from django.urls import path
from . import views

urlpatterns = [
    path('counselling_services/', views.counselling_services, name='counselling_services')
]
