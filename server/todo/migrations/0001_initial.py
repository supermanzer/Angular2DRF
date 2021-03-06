# Generated by Django 2.2.2 on 2019-06-15 21:12

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
            name='ToDo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(blank=True, null=True)),
                ('due_date', models.DateTimeField(blank=True, null=True)),
                ('completed', models.BooleanField(default=False)),
                ('created_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='todos_created', to=settings.AUTH_USER_MODEL)),
                ('modified_by', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='todos_modified', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
