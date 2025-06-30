from django.shortcuts import render

# Create your views here.
def galleryec23(request):
    """
    Render the final event for EC23.
    """
    return render(request, 'galleryec23.html')