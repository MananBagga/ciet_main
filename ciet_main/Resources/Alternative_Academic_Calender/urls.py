from django.urls import path
from . import views

urlpatterns = [
    path('alternative_academic_calender/', views.alternative_academic_calender, name='alternative_academic_calender')
]
