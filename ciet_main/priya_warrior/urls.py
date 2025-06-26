from django.urls import path
from . import views

urlpatterns = [
    path('', views.priya_warrior, name='priya_warrior'),
]