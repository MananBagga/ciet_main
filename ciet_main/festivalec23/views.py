from django.shortcuts import render

# Create your views here.
def festivalec23(request):
    """
    Render the festivalec23 page.
    """
    return render(request, 'festivalec23.html')