from django.shortcuts import render

# Create your views here.
def online_course(request):
    """
    Render the home page for online courses.
    """
    return render(request, 'online_course.html')