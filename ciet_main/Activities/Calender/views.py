from django.shortcuts import render

# Create your views here.
def calender(requests):
    return render(requests, 'calender.html')