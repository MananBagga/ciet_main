from django.urls import path
from . import views

urlpatterns = [
    path('', views.advisory_board, name='advisory_board'),
]