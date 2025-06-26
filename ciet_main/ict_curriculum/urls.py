from django.urls import path
from . import views

urlpatterns = [
    path('', views.ict_curriculum, name='ict_curriculum')
]
