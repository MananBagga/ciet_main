from django.shortcuts import render

# Create your views here.
def unesco(req):
    return render(req, 'unesco.html')
