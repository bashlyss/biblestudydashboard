from rest_framework import viewsets
from . import models, serializers


class GroupViewSet(viewsets.ModelViewSet):
    queryset = models.Group.objects.all().order_by('active', 'name')
    serializer_class = serializers.GroupSerializer
