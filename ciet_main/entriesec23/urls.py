from django.urls import path
from . import views
urlpatterns = [
    path('entriesec23/', views.entriesec23, name='entriesec23'),
    
]