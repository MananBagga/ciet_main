from django.shortcuts import render

# Create your views here.
def announcements(req):
    return render(req, 'announcements.html')
