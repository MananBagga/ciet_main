from django.shortcuts import render

# Create your views here.
def ncf_tech(req):
    return render(req, 'ncf_tech.html')