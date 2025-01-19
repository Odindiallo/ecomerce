#!/bin/bash

# Start the Django development server
echo "Starting Django server..."
source venv/bin/activate
python manage.py migrate
python manage.py runserver &

# Start the React development server
echo "Starting React server..."
cd frontend
npm start
