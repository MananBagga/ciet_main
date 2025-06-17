from django.shortcuts import render

# Create your views here.
def econtent_eval(req):
    return render(req, 'econtent_eval.html')
