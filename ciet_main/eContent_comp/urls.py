from django.urls import path
from . import views
urlpatterns = [
    path('econtent_comp/', views.eContent_comp, name='eContent_comp'),
    
]