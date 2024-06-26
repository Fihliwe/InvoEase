from django.urls import path
from . import views


urlpatterns = [
    path('InvoEaseApp/hello', views.say_hello)
]