from django.shortcuts import render

# Create your views here.
def summer_camp(request):
    """
    Render the summer camp page.
    """
    return render(request, 'summer_camp.html')