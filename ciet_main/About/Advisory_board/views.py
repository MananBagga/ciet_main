from django.shortcuts import render

# Create your views here.
def advisory_board(requests):
    return render(requests, 'advisory_board.html')