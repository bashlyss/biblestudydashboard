from rest_framework import permissions
from . import models

EDIT_METHODS = ('PUT', 'PATCH', 'DELETE')

class EditIsGroupAdmin(permissions.BasePermission):
    """
    Only allow admin to edit or delete
    """

    def has_object_permission(self, request, view, obj):
        group_member_admin = models.GroupMember.objects.filter(
            user=request.user, group=obj, admin=True).exists()
        return request.method not in EDIT_METHODS or group_member_admin
