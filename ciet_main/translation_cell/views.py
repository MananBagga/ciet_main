from django.shortcuts import render

# Create your views here.
def translation_cell(request):
    return render(request, 'translation_cell.html')