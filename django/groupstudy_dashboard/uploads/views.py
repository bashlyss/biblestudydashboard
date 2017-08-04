from generic.views import AuthModelViewSet
from . import models, serializers


class DocumentViewSet(AuthModelViewSet):
    queryset = models.Document.objects.all()
    serializer_class = serializers.DocumentSerializer
