# Generated by Django 3.1.4 on 2021-01-18 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0032_auto_20210118_1010'),
    ]

    operations = [
        migrations.AddField(
            model_name='payments',
            name='qunatity',
            field=models.CharField(default=0, max_length=1000),
        ),
    ]
