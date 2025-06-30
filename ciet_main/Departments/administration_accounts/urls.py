from django.urls import path
from . import views

urlpatterns = [
    path('administration_accounts/', views.administration_accounts, name='administration_accounts')
]
