from django.shortcuts import render

# Create your views here.
def library(req):
    return render(req, 'library.html')
