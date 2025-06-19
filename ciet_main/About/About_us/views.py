from django.shortcuts import render

# Create your views here.
def about_us(requests):
    return render(requests, 'about_us.html')