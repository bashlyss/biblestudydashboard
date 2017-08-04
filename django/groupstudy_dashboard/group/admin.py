from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Group, admin.ModelAdmin)
admin.site.register(models.GroupMember, admin.ModelAdmin)