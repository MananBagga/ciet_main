from django.urls import path 
from . import views

urlpatterns = [
    path('', views.dept_ict_training, name='dept_ict_training')
]
