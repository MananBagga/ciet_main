from django.shortcuts import render

# Create your views here.
def school_curriculum(req):
    return render(req, 'school_curriculum.html')