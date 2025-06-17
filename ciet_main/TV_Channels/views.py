from django.shortcuts import render

# Create your views here.
def tv_channels(req):
    return render(req, 'tv_channels.html')