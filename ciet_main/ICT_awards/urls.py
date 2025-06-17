from django.urls import path
from . import views

urlpatterns = [
    path('ICT_Awards/', views.ICT_Awards, name='ICT_Awards'),
]