from django.shortcuts import render

# Create your views here.
def special_econtent(request):
    return render(request, 'special_econtent.html')