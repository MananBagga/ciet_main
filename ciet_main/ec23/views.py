from django.shortcuts import render

# Create your views here.
def ec23(request):
    """
    Render the ec23 page.
    """
    return render(request, 'ec23.html')
