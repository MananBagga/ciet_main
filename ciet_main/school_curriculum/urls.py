from django.urls import path
from . import views

urlpatterns = [
    path('', views.school_curriculum, name='school_curriculum')
]
