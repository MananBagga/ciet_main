from django.urls import path
from . import views

urlpatterns = [
    path('', views.ar_vr, name='ar_vr'),
]
