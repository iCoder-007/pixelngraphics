# Generated by Django 3.1.1 on 2020-12-20 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='changes',
            field=models.CharField(default=0, max_length=1000),
        ),
    ]
