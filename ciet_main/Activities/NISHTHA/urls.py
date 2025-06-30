from django.urls import path
from . import views

urlpatterns = [
    path('Activities_nishtha/', views.Activities_nishtha, name='Activities_nishtha')
]
