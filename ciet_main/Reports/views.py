from django.shortcuts import render

# Create your views here.
def reports(req):
    return render(req, 'reports.html')
