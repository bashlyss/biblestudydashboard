from rest_framework import serializers

from comments.models import DocumentComment
from . import models

class DocumentSerializer(serializers.ModelSerializer):
    comments = serializers.PrimaryKeyRelatedField(many=True, queryset=DocumentComment.objects.all())

    class Meta:
        model = models.Document
        fields = '__all__'
        read_only_fields = ('uploaded_by',)

    def create(self, validated_data):
        validated_data['uploaded_by'] = self.context['request'].user
        return super().create(validated_data)
