
from rest_framework import serializers

from . import models

class GroupCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.GroupComment
        fields = '__all__'
        read_only_fields = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

class DocumentCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DocumentComment
        fields = '__all__'
        read_only_fields = ('user',)

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
