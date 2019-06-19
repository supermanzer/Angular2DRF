from django.contrib.auth.models import User, Group
from todo.models import ToDo
from rest_framework import viewsets
from todo.serializers import UserSerializer, GroupSerialzer, ToDoSerialier
# Create your views here.


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerialzer


class ToDoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all().order_by('-date_created')
    serializer_class = ToDoSerialier
