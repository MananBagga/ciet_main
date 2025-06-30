from django.urls import path
from . import views

urlpatterns = [
    path('srg/', views.srg, name='srg')
]
