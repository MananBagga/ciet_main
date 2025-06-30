from django .urls import path
from . import views
urlpatterns = [
    path('', views.festivalec23, name='festivalec23'),
    
]