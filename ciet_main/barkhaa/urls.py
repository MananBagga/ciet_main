from django.urls import path
from . import views

urlpatterns = [
    path('barkhaa/', views.barkhaa, name='barkhaa'),
]
