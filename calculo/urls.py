from django.urls import path
from calculo import views

urlpatterns = [
    path('',views.index),
    path('calculo',views.index),
]