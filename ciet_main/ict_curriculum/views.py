from django.shortcuts import render

# Create your views here.
def ict_curriculum(req):
    return render(req, 'ict_curriculum.html')