from django.shortcuts import render

# Create your views here.
def brochure_ict_initiatives(req):
    return render(req, 'brochure_ict_initiatives.html')
