from django.shortcuts import render

# Create your views here.
def digital_creativity(request):
    """
    Render the digital creativity page.
    """
    return render(request, 'digital_creativity.html')