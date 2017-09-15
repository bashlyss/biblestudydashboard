from __future__ import unicode_literals

from django.db import models


class BaseUpload(models.Model):
    title = models.CharField(max_length=80)
    description = models.TextField(blank=True)
    created_on = models.DateField(auto_now_add=True)
    uploaded_by = models.ForeignKey('auth.User')
    uploaded_to = models.ForeignKey('group.Group')

    def __str__(self):
        return '{} by {} for {}'.format(self.title, self.uploaded_by, self.uploaded_to)

    class Meta:
        abstract = True

class Document(BaseUpload):
    document = models.FileField(upload_to='uploads/%Y/%m/%d/')
