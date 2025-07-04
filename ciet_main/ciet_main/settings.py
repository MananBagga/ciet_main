"""
Django settings for ciet_main project.

Generated by 'django-admin startproject' using Django 5.2.3.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-1by4gotbrbeg&f0se#!pdql9gbd#b+78gprdcfh_e!c7hla*ok'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'Initiatives.MajorProjects',
    'About.People',
    'About.About_us',
    'Activities.ICT_awards',
    'About.Advisory_board',
    'Activities.Calender',
    'Departments.dept_ICT_Training',
    'Initiatives.PAB_Projects',
    'Initiatives.PAC_Projects',
    'Activities.Webinars',
    'Activities.Conference',
    'Activities.Counselling_Services',
    'Activities.Live_Classrooms',
    'Activities.NISHTHA',
    'Activities.SRG',
    'Departments.Media_Production_Division',
    'Departments.Planning_Research_Division',
    'Departments.Engineering_division',
    'More.RTI',
    'More.Announcements',
    'More.Contact',
    'Resources.Cyber_Safety',
    'Resources.eContent_Guidelines',
    'Resources.Catalogue',
    'Resources.Brochure_ICT_Initiatives',
    'Resources.Journals',
    'Resources.Newsletter',
    'Resources.eContent_Evaluation',
    'Resources.Reports',
    'Resources.UNESCO',
    'Resources.Learning_Objects',
    'Resources.NCERT_Initiatives',
    'Resources.Audio_Books',
    'Resources.Alternative_Academic_Calender',
    'Activities.TV_Channels',
    'Activities.Workshop_Training',
    'screen_reader_access',
    'Departments.administration_accounts',
    'Library',
    'cyber_jaagrookta',
    'digital_creativity',
    'pmevidya',
    'epathshala',
    'diksha',
    'moocs_on_swayam',
    'nishtha',
    'ncf_tech',
    'ict_curriculum',
    'school_curriculum',
    'barkhaa',
    'special_econtent',
    'priya_warrior',
    'teachers_support',
    'ar_vr',
    'prashast',
    'evidya_dth',
    'bharatonthemoon',
    'ejaadui_pitara',
    'translation_cell',
    'summer_camp',
    'privacy_policy',
    'conference_video',
    'comics',
    'daisy_books',
    'eContent_comp',
    'ec23',
    'finaleventec23',
    'festivalec23',
    'registrationec23',
    'entriesec23',
    'galleryec23',
    'online_course',
    'satellite',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ciet_main.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        # 'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ciet_main.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/5.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.2/howto/static-files/

STATIC_URL = 'static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = BASE_DIR / 'staticfiles'

# Default primary key field type
# https://docs.djangoproject.com/en/5.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
