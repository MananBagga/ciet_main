from django.shortcuts import render

# Create your views here.
def daisy_books(request):
    return render(request, 'daisy_books.html')
