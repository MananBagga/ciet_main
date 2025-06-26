from django.urls import path
from . import views

urlpatterns = [
    path('', views.ncf_tech, name='ncf_tech')
]
