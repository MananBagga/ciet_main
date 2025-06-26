from django.shortcuts import render

# Create your views here.
def barkhaa(request):
    """
    Render the Barkhaa view.
    """
    return render(request, 'barkhaa.html')