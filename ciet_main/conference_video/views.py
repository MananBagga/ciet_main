from django.shortcuts import render

# Create your views here.
def conference_video(request):
    return render(request, 'conference_video.html')

def conference_2(request):
    return render(request, 'conference_2.html')