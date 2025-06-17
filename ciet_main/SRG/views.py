from django.shortcuts import render

# Create your views here.
def srg(requests):
    return render(requests, 'srg.html')
