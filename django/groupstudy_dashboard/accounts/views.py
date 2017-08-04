from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.http import HttpResponseForbidden, HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.http import require_POST
from generic.views import AuthModelViewSet
from rest_framework.permissions import AllowAny
from . import serializers


class UserViewSet(AuthModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

    # TODO handle update authorization
    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return (AllowAny(),) if self.request.method == 'POST' else super().get_permissions()


@require_POST
def login(request):
    username = request.POST['email']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
        auth_login(request, user)
        return HttpResponseRedirect(reverse('home'))
    else:
        return HttpResponseForbidden()


@require_POST
def logout(request):
    auth_logout(request)
    return HttpResponseRedirect(reverse('accounts:login'))
