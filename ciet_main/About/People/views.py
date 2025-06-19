from django.shortcuts import render

def people(requests):
    return render(requests, 'people.html')
