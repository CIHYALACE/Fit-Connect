from rest_framework.test import APITestCase
from django.urls import reverse
from users.models import CoachProfile
from core.models import TrainingPrograms
from core.serializers import TrainingProgramSerializer
from core.views import TrainingProgramsViewSet
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile
import os
from django.conf import settings

# Python

User = get_user_model()

class TrainingProgramsViewSetTest(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(name="Abdo", email="abdo@gmail.com", password='testpass')
        self.coach = CoachProfile.objects.create(
            user=self.user,
            bio="Test coach",
            experience_years=5
        )
        # Use an actual image from media/training_programs/
        image_path = os.path.join(settings.MEDIA_ROOT, 'training_programs', 'SummerForm_Hossam.jpeg')  # Replace with an actual file name
        with open(image_path, 'rb') as img_file:
            self.dummy_image = SimpleUploadedFile(
                name='test_image.jpg',
                content=img_file.read(),
                content_type='image/jpeg'
            )
        self.program = TrainingPrograms.objects.create(
            title="Test Program",
            auther=self.coach,
            duration="4 weeks",
            description="A test training program",
            price=99.99,
            difficulty_level="begginer",
            image=self.dummy_image
        )
        self.client.force_authenticate(user=self.user)

    def test_list_training_programs(self):
        url = reverse('trainingprograms-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), TrainingPrograms.objects.count())

    def test_create_training_program(self):
        url = reverse('trainingprograms-list')
        image_path = os.path.join(settings.MEDIA_ROOT, 'training_programs', 'SummerForm_Hossam.jpeg')
        with open(image_path, 'rb') as img_file:
            dummy_image = SimpleUploadedFile(
                name='test_image.jpg',
                content=img_file.read(),
                content_type='image/jpeg'
            )
        data = {
            "title": "New Program",
            "auther": self.coach.id,
            "duration": "6 weeks",
            "description": "A new training program",
            "price": 120.00,
            "difficulty_level": "intermediate",
            "image": dummy_image
        }
        response = self.client.post(url, data, format='multipart')
        print("CREATE RESPONSE:", response.data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(TrainingPrograms.objects.count(), 2)

    def test_retrieve_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['title'], self.program.title)

    def test_update_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        image_path = os.path.join(settings.MEDIA_ROOT, 'training_programs', 'SummerForm_Hossam.jpeg')
        with open(image_path, 'rb') as img_file:
            dummy_image = SimpleUploadedFile(
                name='test_image.jpg',
                content=img_file.read(),
                content_type='image/jpeg'
            )
        data = {
            "title": "Updated Program",
            "auther": self.coach.id,
            "duration": "8 weeks",
            "description": "Updated description",
            "price": 150.00,
            "difficulty_level": "advanced",
            "image": dummy_image
        }
        response = self.client.put(url, data, format='multipart')
        print("UPDATE RESPONSE:", response.data)
        self.assertEqual(response.status_code, 200)
        self.program.refresh_from_db()
        self.assertEqual(self.program.title, "Updated Program")

    def test_delete_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, 204)
        self.assertFalse(TrainingPrograms.objects.filter(id=self.program.id).exists())