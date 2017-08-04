import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.http import HttpResponse, HttpResponseForbidden, JsonResponse
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
        user_serializer = serializers.UserSerializer(user)
        response = JsonResponse(user_serializer.data)
        response.set_cookie('authenticated', '1')
        return response
    else:
        return HttpResponseForbidden()


@require_POST
def logout(request):
    auth_logout(request)
    response = HttpResponse('true')
    response.delete_cookie('authenticated')
    return response
