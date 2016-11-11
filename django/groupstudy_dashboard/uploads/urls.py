from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'documents', views.DocumentViewSet)

app_name = 'uploads'
urlpatterns = [
    url(r'^', include(router.urls)),        
]
