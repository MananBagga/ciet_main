from django.shortcuts import render

# Create your views here.
def media_production_division(requests):
    return render(requests, 'media_production_division.html')
