from django.shortcuts import render

# Create your views here.
def engineering_division(requests):
    return render(requests, 'engineering_division.html')