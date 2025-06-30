from django.shortcuts import render

# Create your views here.
def registrationec23(request):
    """
    Render the final event for EC23.
    """
    return render(request, 'registrationec23.html')