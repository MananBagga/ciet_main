from django.urls import path
from . import views

urlpatterns = [
    path('', views.cyber_jaagrookta, name='cyber_jaagrookta')
]
