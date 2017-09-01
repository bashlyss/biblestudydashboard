from rest_framework import serializers

from django.contrib.auth.models import User
from . import models


class GroupSerializer(serializers.ModelSerializer):
    users = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())

    def create(self, validated_data):
        user_data = validated_data.pop('users')
        group = self.Meta.model.objects.create(**validated_data)
        for user in user_data:
            group_member = models.GroupMember.objects.create(group=group, user_id=user.id)
            if user.id == self.context['request'].user.id:
                group_member.admin = True
                group_member.save()
        return group

    class Meta:
        model = models.Group
        fields = '__all__'
