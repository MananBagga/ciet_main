from django.shortcuts import render

# Create your views here.
def catalogue(req):
    return render(req, 'catalogue.html')
