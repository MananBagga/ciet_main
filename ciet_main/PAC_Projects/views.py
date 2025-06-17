from django.shortcuts import render

# Create your views here.
def pac_projects(requests):
    return render(requests, 'pac_projects.html')
