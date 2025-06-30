from django.shortcuts import render

# Create your views here.
def eContent_comp(request):
    """
    Render the eContent competition page.
    """
    return render(request, 'eContent_comp.html')
