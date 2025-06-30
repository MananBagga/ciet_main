from django.shortcuts import render

# Create your views here.
def comics(request):
    return render(request, 'comics.html')