# Generated by Django 3.1.4 on 2020-12-26 15:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0014_product_issold'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='number_sell',
        ),
    ]
