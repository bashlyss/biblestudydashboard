from generic.views import AuthModelViewSet
from . import models, serializers


class GroupViewSet(AuthModelViewSet):
    queryset = models.Group.objects.all().order_by('active', 'name')
    serializer_class = serializers.GroupSerializer
