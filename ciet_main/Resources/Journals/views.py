from django.shortcuts import render

# Create your views here.
def journals(req):
    return render(req, 'journals.html')
