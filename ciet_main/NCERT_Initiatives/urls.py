from django.urls import path
from . import views

urlpatterns = [
    path('', views.ncert_initiatives, name='ncert_initiatives')
]
