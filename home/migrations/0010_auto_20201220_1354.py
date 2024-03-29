# Generated by Django 3.1.1 on 2020-12-20 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0009_cart_changes'),
    ]

    operations = [
        migrations.CreateModel(
            name='HomePage',
            fields=[
                ('sno', models.AutoField(primary_key=True, serialize=False)),
                ('topvideo', models.FileField(blank=True, null=True, upload_to='home/homescreenDesign', verbose_name='')),
                ('toppremadelogo', models.FileField(blank=True, null=True, upload_to='home/homescreenDesign', verbose_name='')),
                ('banner', models.FileField(blank=True, null=True, upload_to='home/homescreenDesign', verbose_name='')),
                ('streamoverlays', models.FileField(blank=True, null=True, upload_to='home/homescreenDesign', verbose_name='')),
                ('timeStamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='cart',
            name='changes',
            field=models.CharField(default='No', max_length=1000),
        ),
    ]
