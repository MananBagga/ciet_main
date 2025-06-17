from django.shortcuts import render

# Create your views here.
def pab_projects(requests):
    return render(requests, 'pab_projects.html')
