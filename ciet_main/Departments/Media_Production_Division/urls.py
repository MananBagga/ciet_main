from django.urls import path
from . import views

urlpatterns = [
    path('mpd/', views.media_production_division, name='media_production_division')
]
