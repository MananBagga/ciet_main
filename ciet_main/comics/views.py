from django.shortcuts import render

# Create your views here.
def comics(request):
    return render(request, 'comics.html')

def comics_two(request):
    return render(request, 'comics_two.html')