from django .urls import path
from . import views
urlpatterns = [
    path('finaleventec23/', views.finaleventec23, name='finaleventec23'),
    
]