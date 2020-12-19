# Generated by Django 3.1.1 on 2020-12-10 11:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('sellername', models.CharField(default=0, max_length=1000)),
                ('category', models.CharField(default=0, max_length=1000)),
                ('title', models.CharField(default=0, max_length=1000)),
                ('fileformat', models.CharField(default=0, max_length=1000)),
                ('discription', models.CharField(default=0, max_length=1000)),
                ('searchTags', models.CharField(default=0, max_length=1000)),
                ('Price', models.CharField(default=0, max_length=1000)),
                ('isVerified', models.BooleanField(default=False)),
                ('timeStamp', models.DateTimeField(auto_now_add=True)),
                ('seller', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SellerApplication',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(default=0, max_length=1000)),
                ('email', models.CharField(default=0, max_length=1000)),
                ('name', models.CharField(default=0, max_length=1000)),
                ('Portfolio', models.CharField(default=0, max_length=1000)),
                ('isVerified', models.BooleanField(default=False)),
                ('timeStamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='ProductSample',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('samplesfile', models.FileField(null=True, upload_to='home/products', verbose_name='')),
                ('product', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='home.product')),
            ],
        ),
    ]
