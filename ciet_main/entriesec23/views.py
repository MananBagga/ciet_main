from django.shortcuts import render

# Create your views here.
def entriesec23(request):
    """
    Render the eContent competition page.
    """
    return render(request, 'entriesec23.html')