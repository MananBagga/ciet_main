from django.shortcuts import render

# Create your views here.
def conference(requests):
    return render(requests, 'conference.html')
