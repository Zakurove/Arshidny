# Generated by Django 3.0.7 on 2020-08-18 00:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_annoucementimage_announcement'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='AnnoucementImage',
            new_name='AnnouncementImage',
        ),
    ]