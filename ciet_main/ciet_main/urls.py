"""
URL configuration for ciet_main project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('major_projects/', include('MajorProjects.urls')),
    path('people/', include('People.urls')),
    path('Activities/', include('ICT_awards.urls')),
    path('about_us/', include('About_us.urls')),
    path('advisory_board/', include('Advisory_board.urls')),
    path('calender/', include('Calender.urls')),
    path('dept_ict_training/', include('dept_ICT_Training.urls')),
    path('pab_projects/', include('PAB_Projects.urls')),
    path('pac_projects/', include('PAC_Projects.urls')),
    path('webinars/', include('Webinars.urls')),
    path('conference/', include('Conference.urls')),
    path('counselling_services/', include('Counselling_Services.urls')),
    path('live_classrooms/', include('Live_Classrooms.urls')),
    path('nishtha/', include('NISHTHA.urls')),
    path('srg/', include('SRG.urls')),
    path('mpd/', include('Media_Production_Division.urls')),
    path('prd/', include('Planning_Research_Division.urls')),
    path('ed/', include('Engineering_division.urls')),
]
