# Fit Connect

Fit Connect is a full-stack fitness platform designed to connect users with professional coaches and high-quality training programs. The project features a modern React frontend (with Vite, Bootstrap, and Tailwind CSS) and a Django backend.

---

## Features

- **Browse Training Programs:**  
  Users can view a variety of training programs, each with details like title, duration, description, price, difficulty level, and author.

- **Coach Directory:**  
  Explore a list of professional coaches, each with their own profile and specialties.

- **Responsive UI:**  
  The frontend is built with React, Bootstrap, and Tailwind CSS for a modern, responsive design.

- **API Integration:**  
  Data is fetched from a Django REST API for both training programs and coaches.

- **Reusable Components:**  
  Includes modular components such as Header, Footer, HeroSection, ProductsSection, and TrainingCard.

---

## Tech Stack

- **Frontend:**  
  - React (with Vite)
  - Bootstrap 5
  - Tailwind CSS
  - React Router

- **Backend:**  
  - Django
  - Django REST Framework

- **Other:**  
  - Axios (for API requests)
  - ESLint (with React and hooks plugins)

---

## Getting Started

### Prerequisites

- Node.js & npm
- Python 3.x & pip

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## Project Structure

FitConnect/
│
├── backend/
│   └── core/
│       └── migrations/
│           └── 0001_initial.py
│   └── users/
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── sharedLayout/
│   │   └── style/
│   ├── index.html
│   ├── vite.config.js
│   └── ...
│
└── ReadMe.md

---

## License

This project is licensed under the MIT License.

