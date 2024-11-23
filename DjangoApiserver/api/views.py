from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.

def get_data(request):
    data = {
        'message' : 'Json responce',
        'status' : 'success',
        'data' : {
            "id" : 1,
            "name" : "hhh",
            "email" : "ttt@naver.com",
        },
    }
    return JsonResponse(data, status=200)