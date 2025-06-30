from django.urls import path
from . import views
urlpatterns = [
    path('', views.summer_camp, name='summer_camp'),
]