# Generated by Django 3.1.4 on 2021-01-17 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0026_myorder_isprocessed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='discription',
            field=models.TextField(default=''),
        ),
    ]