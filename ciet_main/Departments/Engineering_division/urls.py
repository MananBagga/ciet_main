from django.urls import path
from . import views

urlpatterns = [
    path('ed/', views.engineering_division, name='engineering_division')
]
