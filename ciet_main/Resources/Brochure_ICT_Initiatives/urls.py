from django.urls import path
from . import views

urlpatterns = [
    path('brochure/', views.brochure_ict_initiatives, name='brochure_ict_initiatives')
]
