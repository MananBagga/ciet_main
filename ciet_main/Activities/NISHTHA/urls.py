from django.urls import path
from . import views

urlpatterns = [
    path('', views.nishtha, name='nishtha')
]
