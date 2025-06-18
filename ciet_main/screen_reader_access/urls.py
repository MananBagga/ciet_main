from django.urls import path
from . import views

urlpatterns = [
    path('', views.screen_reader_access, name='screen_reader_access')
]
