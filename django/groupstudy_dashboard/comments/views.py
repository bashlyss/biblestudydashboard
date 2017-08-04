from generic.views import AuthModelViewSet
from . import models, serializers


class GroupCommentViewSet(AuthModelViewSet):
    queryset = models.GroupComment.objects.all()
    serializer_class = serializers.GroupCommentSerializer

class DocumentCommentViewSet(AuthModelViewSet):
    queryset = models.DocumentComment.objects.all()
    serializer_class = serializers.DocumentCommentSerializer
