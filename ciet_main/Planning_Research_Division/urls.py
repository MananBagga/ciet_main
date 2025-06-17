from django.urls import path
from . import views

urlpatterns = [
    path('', views.planning_research_division, name='planning_research_division')
]
