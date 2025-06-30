from django.urls import path
from . import views

urlpatterns = [
    path('advisory_board/', views.advisory_board, name='advisory_board'),
]