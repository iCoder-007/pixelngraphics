# Generated by Django 3.1.4 on 2021-01-15 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0022_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='sellerprofile',
            name='transferred',
            field=models.IntegerField(default=0),
        ),
    ]