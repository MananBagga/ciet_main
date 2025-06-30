from django.urls import path
from . import views

urlpatterns = [
    path('diksha/', views.diksha, name='diksha')
]
