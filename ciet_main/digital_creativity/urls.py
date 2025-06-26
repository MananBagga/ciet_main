from django.urls import path
from . import views
urlpatterns = [
    path('', views.digital_creativity, name='digital_creativity'),
]