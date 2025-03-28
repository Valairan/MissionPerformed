#!/bin/bash

# Start the backend server
echo "Starting the backend server..."
cd backend
npm start &

# Start the frontend server
echo "Starting the frontend server..."
cd ../frontend
npm start &

# Wait for both processes to complete
wait
