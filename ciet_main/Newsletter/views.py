from django.shortcuts import render

# Create your views here.
def newsletter(req):
    return render(req, 'newsletter.html')
