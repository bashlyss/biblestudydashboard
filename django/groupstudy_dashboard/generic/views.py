from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework import viewsets

class AuthModelViewSet(LoginRequiredMixin, viewsets.ModelViewSet):
    pass
