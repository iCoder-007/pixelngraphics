# Generated by Django 3.1.4 on 2021-01-17 19:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0027_auto_20210117_0709'),
    ]

    operations = [
        migrations.RenameField(
            model_name='homepage',
            old_name='topvideo',
            new_name='top',
        ),
    ]
