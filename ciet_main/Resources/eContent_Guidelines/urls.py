from django.urls import path
from . import views

urlpatterns = [
    path('', views.econtent_guidelines, name='econtent_guidelines')
]
