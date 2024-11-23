from django.contrib import admin
from django.urls import path
from django.urls import include
from api import urls as api_urls
from . import views
app_name = 'api'
urlpatterns = [
    path('data/', views.get_data, name="get_data"),
    
]