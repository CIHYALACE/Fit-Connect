FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    POETRY_VIRTUALENVS_CREATE=false \
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100

WORKDIR /app

# System deps required by Pillow and optionally psycopg2
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    libpq-dev \
    libjpeg-dev \
    zlib1g-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# copy requirements and install
COPY backend/requirements.txt ./requirements.txt
RUN pip install --upgrade pip setuptools wheel
RUN pip install -r ./requirements.txt

# Copy project
COPY backend/ ./

# Collect static (optional) - ensure STATIC_ROOT is set in settings or adjust
ENV DJANGO_SETTINGS_MODULE=fitconnect.settings
RUN python manage.py collectstatic --noinput || true

# Expose port
EXPOSE 8000

# Use gunicorn to run the app
CMD ["gunicorn", "fitconnect.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3"]