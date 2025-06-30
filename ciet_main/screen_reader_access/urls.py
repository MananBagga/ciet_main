from django.urls import path
from . import views

urlpatterns = [
    path('screen_reader_access/', views.screen_reader_access, name='screen_reader_access')
]
