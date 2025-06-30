from django.urls import path 
from . import views

urlpatterns = [
    path('dept_ict_training/', views.dept_ict_training, name='dept_ict_training')
]
