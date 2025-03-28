# OnlyTasks

This is a task manager application with a React frontend and an Express.js backend. The app allows users to create, read, update, and delete tasks with real-time updates. The backend uses MongoDB for data persistence.

## Project Structure

- **Frontend - OnlyTasks**: The React frontend for the task management app.
- **Backend - OnlyTasksServer**: The Node.js/Express backend for handling API requests and MongoDB interactions.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```
### 2. Install dependencies
#### Backend
Go to the backend directory and install the required dependencies:

```bash

cd OnlyTasksServer
npm install
```

#### Frontend
Go to the frontend directory and install the required dependencies:

```bash 
cd OnlyTasks
npm install
```
### 3. Set up Environment Variables
Backend: Create a .env.local file inside the backend folder with the following content:

```env
MONGODB_URI=mongodb://localhost:27017/OnlyTasks
PORT=5000
```

Frontend: Create a .env.local file inside the frontend folder with the following content:

```env
REACT_APP_API_URL=http://localhost:5000/
```
### 4. Run the application
You can start both the frontend and backend using the start.sh script:

```bash

chmod +x start.sh
./start.sh
This will start both the backend and frontend servers concurrently.
```
### 5. Access the application
The backend will be available at http://localhost:5000.

The frontend will be available at http://localhost:3000.

### Features
* Create, read, update, and delete tasks.
* Sort tasks by creation date, title, or status.
* Responsive and clean UI with Tailwind CSS.
* Technologies Used
* Frontend:
    * React
    * Axios

* Backend:
    * Node.js
    * Express.js
    * MongoDB

* Database: MongoDB

### License
This project is licensed under the MIT License.
