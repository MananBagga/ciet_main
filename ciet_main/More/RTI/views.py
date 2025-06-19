from django.shortcuts import render

# Create your views here.
def rti(req):
    return render(req, 'rti.html')