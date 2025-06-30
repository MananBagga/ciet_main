from django.urls import path
from . import views

urlpatterns = [
    path('econtent_eval/', views.econtent_eval, name='econtent_eval')
]
