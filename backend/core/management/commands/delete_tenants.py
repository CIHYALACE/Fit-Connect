from django.core.management.base import BaseCommand
from core.models import Client, Domain

class Command(BaseCommand):
    help = 'Delete all tenants and their domains'

    def handle(self, *args, **options):
        Domain.objects.all().delete()
        Client.objects.all().delete()
        self.stdout.write(self.style.SUCCESS('Successfully deleted all tenants'))