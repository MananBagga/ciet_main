from django.shortcuts import render

# Create your views here.
def webinars(requests):
    return render(requests, 'webinars.html')
