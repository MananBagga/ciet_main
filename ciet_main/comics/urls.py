from django.urls import path
from . import views

urlpatterns = [
    path('', views.comics, name='comics'),
    path('comics_two/', views.comics_two, name='comics_two'),
]