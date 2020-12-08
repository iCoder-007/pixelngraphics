# Generated by Django 3.1.3 on 2020-12-06 10:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0002_sellerapplication_isverified'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('sellername', models.CharField(default=0, max_length=1000)),
                ('category', models.CharField(default=0, max_length=1000)),
                ('product', models.FileField(null=True, upload_to='home/products', verbose_name='')),
                ('timeStamp', models.DateTimeField(auto_now_add=True)),
                ('creater', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
