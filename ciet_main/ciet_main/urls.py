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
    path('major_projects/', include('Initiatives.MajorProjects.urls')),
    path('people/', include('About.People.urls')),
    path('Activities/', include('Activities.ICT_awards.urls')),
    path('about_us/', include('About.About_us.urls')),
    path('advisory_board/', include('About.Advisory_board.urls')),
    path('calender/', include('Activities.Calender.urls')),
    path('dept_ict_training/', include('Departments.dept_ICT_Training.urls')),
    path('pab_projects/', include('Initiatives.PAB_Projects.urls')),
    path('pac_projects/', include('Initiatives.PAC_Projects.urls')),
    path('webinars/', include('Activities.Webinars.urls')),
    path('conference/', include('Activities.Conference.urls')),
    path('counselling_services/', include('Activities.Counselling_Services.urls')),
    path('live_classrooms/', include('Activities.Live_Classrooms.urls')),
    path('Activities_nishtha/', include('Activities.NISHTHA.urls')),
    path('srg/', include('Activities.SRG.urls')),
    path('mpd/', include('Departments.Media_Production_Division.urls')),
    path('prd/', include('Departments.Planning_Research_Division.urls')),
    path('ed/', include('Departments.Engineering_division.urls')),
    path('rti/', include('More.RTI.urls')),
    path('announcements/', include('More.Announcements.urls')),
    path('contact/', include('More.Contact.urls')),
    path('cyber_safety_security/', include('Resources.Cyber_Safety.urls')),
    path('econtent_guidelines/', include('Resources.eContent_Guidelines.urls')),
    path('catalogue/', include('Resources.Catalogue.urls')),
    path('brochure/', include('Resources.Brochure_ICT_Initiatives.urls')),
    path('journals/', include('Resources.Journals.urls')),
    path('Newsletters/', include('Resources.Newsletter.urls')),
    path('econtent_eval/', include('Resources.eContent_Evaluation.urls')),
    path('reports/', include('Resources.Reports.urls')),
    path('unesco/', include('Resources.UNESCO.urls')),
    path('learning_objects/', include('Resources.Learning_Objects.urls')),
    path('ncert_initiatives/', include('Resources.NCERT_Initiatives.urls')),
    path('audio_books/', include('Resources.Audio_Books.urls')),
    path('tv_channels/', include('Activities.TV_Channels.urls')),
    path('workshop_training/', include('Activities.Workshop_Training.urls')),
    path('alternative_academic_calender/', include('Resources.Alternative_Academic_Calender.urls')),
    path('screen_reader_access/', include('screen_reader_access.urls')),
    path('administration_accounts/', include('Departments.administration_accounts.urls')),
    path('library/', include('Library.urls')),
    path('cyber_jaagrookta/', include('cyber_jaagrookta.urls')),
    path('digital_creativity/', include('digital_creativity.urls')),
    path('pm_evidya/', include('pmevidya.urls')),
    path('epathshala/', include('epathshala.urls')),
    path('diksha/', include('diksha.urls')),
    path('moocs_on_swayam/', include('moocs_on_swayam.urls')),
    path('nishtha/', include('nishtha.urls')),
    path('ncf_tech/', include('ncf_tech.urls')),
    path('ict_curriculum/', include('ict_curriculum.urls')),
    path('school_curriculum/', include('school_curriculum.urls')),
    path('barkhaa/', include('barkhaa.urls')),
    path('special_econtent/', include('special_econtent.urls')),
    path('priya_warrior/', include('priya_warrior.urls')),
    path('teachers_support/', include('teachers_support.urls')),
    path('ar_vr/', include('ar_vr.urls')),
    path('prashast/', include('prashast.urls')),
    path('evidya_dth/', include('evidya_dth.urls')),
    path('bharatonthemoon/', include('bharatonthemoon.urls')),
    path('ejaadui_pitara/', include('ejaadui_pitara.urls')),
    path('translation_cell/', include('translation_cell.urls')),
    path('privacy_policy/', include('privacy_policy.urls')),
]
