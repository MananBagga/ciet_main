from django.shortcuts import render

# Create your views here.
def satellite(request):
    """
    View function to render the satellite page.
    """
    return render(request, 'satellite.html')