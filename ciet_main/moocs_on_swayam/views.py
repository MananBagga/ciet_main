from django.shortcuts import render

# Create your views here.
def moocs_on_swayam(req):
    return render(req, 'moocs_on_swayam.html')