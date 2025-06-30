from django.urls import path
from . import views
urlpatterns = [
    path('', views.eContent_comp, name='eContent_comp'),
    
]