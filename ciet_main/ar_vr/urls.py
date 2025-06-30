from django.urls import path
from . import views

urlpatterns = [
    path('ar_vr/', views.ar_vr, name='ar_vr'),
]
