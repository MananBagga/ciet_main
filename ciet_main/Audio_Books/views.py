from django.shortcuts import render

# Create your views here.
def audio_books(req):
    return render(req, 'audio_books.html')
