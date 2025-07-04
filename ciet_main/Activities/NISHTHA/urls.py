from django.urls import path
from . import views

urlpatterns = [
    path('activities_nishtha/', views.Activities_nishtha, name='Activities_nishtha')
]
