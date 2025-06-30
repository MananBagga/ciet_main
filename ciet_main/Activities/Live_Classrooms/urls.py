from django.urls import path
from . import views

urlpatterns = [
    path('live_classrooms/', views.live_classrooms, name='live_classrooms')
]
