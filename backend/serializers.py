from rest_framework import serializers
from .models import Announcement, AnnouncementImage
import logging
import json
import sys

#Set


class AnnouncementImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = AnnouncementImage
        fields = ('id','image')

class AnnouncementSerializer(serializers.ModelSerializer):

    images = AnnouncementImageSerializer(source='announcementImages', many=True, read_only=True)

    class Meta:
        model = Announcement
        fields = ('id', 'title', 'description',  'images')
        
    def create(self, validated_data):
        #Announcement
        announcement = Announcement.objects.create(title=validated_data.get('title', 'no-title'), description=validated_data.get('description', 'no-description') )


        #IMAGES
        images_data = self.context.get('view').request.FILES     
        #Three is the genius cat that cracked the code
        images = images_data.getlist('image')
        for img in images:
            print(img)
            AnnouncementImage.objects.create(announcement=announcement, image=img)

        #RETURN
        return announcement