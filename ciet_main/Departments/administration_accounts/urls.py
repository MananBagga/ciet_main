from django.urls import path
from . import views

urlpatterns = [
    path('', views.administration_accounts, name='administration_accounts')
]
