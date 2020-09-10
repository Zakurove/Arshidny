
from django.shortcuts import render
from rest_framework import viewsets, permissions, renderers
from rest_framework.parsers import MultiPartParser, FormParser
from .models import Set, Announcement
from .serializers import  AnnouncementSerializer
from rest_framework.permissions import IsAdminUser, SAFE_METHODS




# Set
class AnnouncementViewSet(viewsets.ModelViewSet):
    # renderer_classes = [renderers.JSONRenderer]
    queryset = Announcement.objects.all()
    
    serializer_class = AnnouncementSerializer

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)