from django.urls import path
from . import views

urlpatterns = [
    path('', views.srg, name='srg')
]
