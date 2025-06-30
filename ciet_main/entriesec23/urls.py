from django.urls import path
from . import views
urlpatterns = [
    path('', views.entriesec23, name='entriesec23'),
    
]