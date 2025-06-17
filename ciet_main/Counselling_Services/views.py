from django.shortcuts import render

# Create your views here.
def counselling_services(requests):
    return render(requests, 'counselling_services.html')
