from django.shortcuts import render

# Create your views here.
def learning_objects(req):
    return render(req, 'learning_objects.html')
