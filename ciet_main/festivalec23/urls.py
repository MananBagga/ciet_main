from django .urls import path
from . import views
urlpatterns = [
    path('festivalec23/', views.festivalec23, name='festivalec23'),
    
]