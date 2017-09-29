from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.DocumentComment, admin.ModelAdmin)
admin.site.register(models.GroupComment, admin.ModelAdmin)
