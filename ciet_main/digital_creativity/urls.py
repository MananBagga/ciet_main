from django.urls import path
from . import views
urlpatterns = [
    path('digital_creativity/', views.digital_creativity, name='digital_creativity'),
]