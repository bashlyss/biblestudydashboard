from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'email',
            'first_name',
            'last_name',
            'password',
        )
        write_only_fields = ('password')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user

    def validate(self, data):
        email = data.get('email', None)
        if email:
            data['username'] = email

        # TODO verify that password is not stored in plain text
        # TODO ensure password is not passed in GET requests

        return data
