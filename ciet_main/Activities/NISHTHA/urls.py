from django.urls import path
from . import views

urlpatterns = [
    path('', views.Activities_nishtha, name='Activities_nishtha')
]
