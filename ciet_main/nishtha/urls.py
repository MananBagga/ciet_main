from django.urls import path
from . import views

urlpatterns = [
    path('nishtha/', views.nishtha, name='nishtha')
]
