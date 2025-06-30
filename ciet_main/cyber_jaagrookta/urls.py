from django.urls import path
from . import views

urlpatterns = [
    path('cyber_jaagrookta/', views.cyber_jaagrookta, name='cyber_jaagrookta')
]
