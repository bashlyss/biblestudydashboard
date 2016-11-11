from rest_framework import viewsets
from . import models, serializers


class GroupCommentViewSet(viewsets.ModelViewSet):
    queryset = models.GroupComment.objects.all()
    serializer_class = serializers.GroupCommentSerializer

class DocumentCommentViewSet(viewsets.ModelViewSet):
    queryset = models.DocumentComment.objects.all()
    serializer_class = serializers.DocumentCommentSerializer
