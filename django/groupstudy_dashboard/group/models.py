from __future__ import unicode_literals

from django.db import models

class GroupMember(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    group = models.ForeignKey('group.Group', on_delete=models.CASCADE)

    admin = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user) + " " + str(self.group)

class Group(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField()
    active = models.BooleanField(default=True)
    users = models.ManyToManyField('auth.User', through=GroupMember)

    def __str__(self):
        return self.name
