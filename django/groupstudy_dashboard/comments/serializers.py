
from rest_framework import serializers

from . import models

class GroupCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GroupComment
        fields = '__all__'

class DocumentCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DocumentComment
        fields = '__all__'
