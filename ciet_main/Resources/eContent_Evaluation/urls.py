from django.urls import path
from . import views

urlpatterns = [
    path('', views.econtent_eval, name='econtent_eval')
]
