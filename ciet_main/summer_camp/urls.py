from django.urls import path
from . import views
urlpatterns = [
    path('summer_camp/', views.summer_camp, name='summer_camp'),
]