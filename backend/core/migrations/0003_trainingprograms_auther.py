# Generated by Django 3.2.25 on 2025-07-19 18:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('core', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='trainingprograms',
            name='auther',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='users.trainer'),
            preserve_default=False,
        ),
    ]
