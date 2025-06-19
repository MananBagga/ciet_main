from django.shortcuts import render

# Create your views here.
def alternative_academic_calender(req):
    return render(req, 'alternative_academic_calender.html')
