from django.shortcuts import render

# Create your views here.
def prashast(req):
    return render(req, 'prashast.html')