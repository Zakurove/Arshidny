from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import AnnouncementViewSet
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()

#Announcement
router.register('api/announcements', AnnouncementViewSet, 'announcement')

urlpatterns = [
    path('', include(router.urls)),
] 
urlpatterns += static( settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)