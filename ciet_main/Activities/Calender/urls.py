from django.urls import path
from . import views

urlpatterns = [
    path('calender/', views.calender, name="calender")
]
