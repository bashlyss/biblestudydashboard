from rest_framework import serializers

from django.contrib.auth.models import User
from . import models
from comments.models import GroupComment
from uploads.models import Document


class GroupSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    comments = serializers.PrimaryKeyRelatedField(many=True, queryset=GroupComment.objects.all())
    document_set = serializers.PrimaryKeyRelatedField(many=True, queryset=Document.objects.all())
    is_admin = serializers.SerializerMethodField()

    def get_is_admin(self, obj):
        user = self.context['request'].user
        return models.GroupMember.objects.filter(admin=True, group=obj, user=user).exists()

    def create(self, validated_data):
        user_data = validated_data.pop('users')
        current_user = self.context['request'].user
        if current_user not in user_data:
            user_data.append(current_user)
        group = self.Meta.model.objects.create(**validated_data)
        for user in user_data:
            group_member = models.GroupMember.objects.create(group=group, user_id=user.id)
            if user.id == current_user.id:
                group_member.admin = True
                group_member.save()
        return group

    class Meta:
        model = models.Group
        fields = '__all__'
