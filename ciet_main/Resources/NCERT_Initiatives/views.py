from django.shortcuts import render

# Create your views here.
def ncert_initiatives(req):
    return render(req, 'ncert_initiatives.html')
