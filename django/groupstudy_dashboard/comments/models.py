from __future__ import unicode_literals

from django.db import models


class Comment(models.Model):
    title = models.CharField(max_length=80, blank=True)
    comment = models.TextField()

    user = models.ForeignKey('auth.User')
    created_on = models.DateField(auto_now_add=True)

    class Meta:
        abstract = True


class GroupComment(Comment):
    group = models.ForeignKey('group.Group')


class DocumentComment(Comment):
    document = models.ForeignKey('uploads.Document')
