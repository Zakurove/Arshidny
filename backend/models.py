from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Set(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    block = models.CharField(blank=True, null=True, max_length=20)
    subject = models.CharField(blank=True, null=True, max_length=20)
    owner_username = models.CharField(max_length=30, null=True)
    owner = models.ForeignKey(
        User, related_name="set", on_delete=models.CASCADE, null=True)

    def save(self, *args, **kwargs):
        super(Set, self).save(*args, **kwargs)

# Annoucements
class Announcement(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    def save(self, *args, **kwargs):
        super(Announcement, self).save(*args, **kwargs)

class AnnouncementImage(models.Model):
    announcement = models.ForeignKey(Announcement, on_delete=models.CASCADE,
                            null=True, related_name='announcementImages')
    image = models.ImageField(upload_to='Announcements', blank=True, null=True)