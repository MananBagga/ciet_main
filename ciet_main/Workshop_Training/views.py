from django.shortcuts import render

# Create your views here.
def workshop_training(req):
    return render(req, 'workshop_training.html')
