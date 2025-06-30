from django.urls import path
from . import views

urlpatterns = [
    path('ict_curriculum/', views.ict_curriculum, name='ict_curriculum')
]
