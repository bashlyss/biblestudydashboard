from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'groups', views.GroupCommentViewSet)
router.register(r'documents', views.DocumentCommentViewSet)

app_name = 'comments'
urlpatterns = [
    url(r'^', include(router.urls)),        
]
