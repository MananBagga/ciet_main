from django.urls import path
from . import views

urlpatterns = [
    path('ncf_tech/', views.ncf_tech, name='ncf_tech')
]
