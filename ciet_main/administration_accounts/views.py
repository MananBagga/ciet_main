from django.shortcuts import render

# Create your views here.
def administration_accounts(req):
    return render(req, 'administration_accounts.html')
