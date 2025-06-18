from django.shortcuts import render

# Create your views here.
def screen_reader_access(req):
    return render(req, 'screen_reader_access.html')
