from django.urls import path
from . import views

urlpatterns = [
    path('econtent_guidelines/', views.econtent_guidelines, name='econtent_guidelines')
]
