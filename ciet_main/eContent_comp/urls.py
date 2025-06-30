from django.urls import path
from . import views
urlpatterns = [
    path('eContent_comp/', views.eContent_comp, name='eContent_comp'),
    
]