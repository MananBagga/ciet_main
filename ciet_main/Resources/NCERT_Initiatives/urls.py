from django.urls import path
from . import views

urlpatterns = [
    path('ncert_initiatives/', views.ncert_initiatives, name='ncert_initiatives')
]
