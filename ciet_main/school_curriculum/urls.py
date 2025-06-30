from django.urls import path
from . import views

urlpatterns = [
    path('school_curriculum/', views.school_curriculum, name='school_curriculum')
]
