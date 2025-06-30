from django.urls import path
from . import views

urlpatterns = [
    path('priya_warrior/', views.priya_warrior, name='priya_warrior'),
]