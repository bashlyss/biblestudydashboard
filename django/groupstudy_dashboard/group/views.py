from generic.views import AuthModelViewSet
from . import models, permissions, serializers


class GroupViewSet(AuthModelViewSet):
    queryset = models.Group.objects.all().order_by('active', 'name')
    serializer_class = serializers.GroupSerializer
    permission_classes = AuthModelViewSet.permission_classes + (permissions.EditIsGroupAdmin,)

    def get_queryset(self):
        return self.queryset.filter(users=self.request.user)
