from django .urls import path
from . import views
urlpatterns = [
    path('', views.finaleventec23, name='finaleventec23'),
    
]