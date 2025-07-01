from django.urls import path
from . import views

urlpatterns = [
    path('ict_awards/', views.ICT_Awards, name='ICT_Awards'),
]