from django.urls import path
from . import views

urlpatterns = [
    path('', views.moocs_on_swayam, name='moocs_on_swayam')
]
