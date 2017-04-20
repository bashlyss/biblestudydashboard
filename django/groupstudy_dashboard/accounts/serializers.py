from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'password_confirmation',
        )
        write_only_fields = ('password', 'password_confirmation')

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data["password"])
        return user

    def validate(self, data):
        import pdb;pdb.set_trace()
        email = data.get('email', None)
        if email:
            data['username'] = email

        if not data['password'] == data['password_confirmation']:
            raise serializers.ValidationError({'password': 'Password does not match'})

        return data
