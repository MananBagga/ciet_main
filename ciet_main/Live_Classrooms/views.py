from django.shortcuts import render

# Create your views here.
def live_classrooms(requests):
    return render(requests, 'live_classrooms.html')
