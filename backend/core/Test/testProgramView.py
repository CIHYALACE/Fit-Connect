from rest_framework.test import APITestCase
from django.urls import reverse
from users.models import CoachProfile
from core.models import TrainingPrograms
from core.serializers import TrainingProgramSerializer
from core.views import TrainingProgramsViewSet

# Python

class TrainingProgramsViewSetTest(APITestCase):
    def setUp(self):
        self.coach = CoachProfile.objects.create(
            user_id=1,  # adjust as needed for your user model
            bio="Test coach",
            experience="5 years"
        )
        self.program = TrainingPrograms.objects.create(
            title="Test Program",
            auther=self.coach,
            duration="4 weeks",
            description="A test training program",
            price=99.99,
            difficulty_level="begginer",
            image=""
        )

    def test_list_training_programs(self):
        url = reverse('trainingprograms-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), TrainingPrograms.objects.count())

    def test_create_training_program(self):
        url = reverse('trainingprograms-list')
        data = {
            "title": "New Program",
            "auther": self.coach.id,
            "duration": "6 weeks",
            "description": "A new training program",
            "price": 120.00,
            "difficulty_level": "intermediate",
            "image": ""
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(TrainingPrograms.objects.count(), 2)

    def test_retrieve_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['title'], self.program.title)

    def test_update_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        data = {
            "title": "Updated Program",
            "auther": self.coach.id,
            "duration": "8 weeks",
            "description": "Updated description",
            "price": 150.00,
            "difficulty_level": "advanced",
            "image": ""
        }
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, 200)
        self.program.refresh_from_db()
        self.assertEqual(self.program.title, "Updated Program")

    def test_delete_training_program(self):
        url = reverse('trainingprograms-detail', args=[self.program.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, 204)
        self.assertFalse(TrainingPrograms.objects.filter(id=self.program.id).exists())