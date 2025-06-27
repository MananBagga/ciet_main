from django.shortcuts import render

# Create your views here.
def teachers_support(request):
    return render(request, 'teachers_support.html')