
### **OnlyTasks Server**

This is the backend for the Task Manager application, built using Node.js and Express. 

## Getting Started

### 1. Install Dependencies

Navigate to the `OnlyTasksServer` directory and install the required dependencies:

```bash
npm install
```
### 2. Set up Environment Variables
Create a `.env.local` (or a .env.prod) file in the root of the backend directory with the following content:

```env
MONGODB_URI: The connection string for MongoDB.
PORT: The port the backend server will listen to (default is 5000).
```

### 3. Start the Backend
Run the following command to start the backend server:

```bash
npm start
```
The backend will now be running at http://localhost:5000.

### 4. API Endpoints

* POST /tasks: Create a new task.
* GET /tasks: Retrieve all tasks.
* GET /tasks/:id: Retrieve a specific task by ID.
* PUT /tasks/:id: Update a specific task by ID. 
* DELETE /tasks/:id: Delete a specific task by ID.

### Database Setup
The backend uses MongoDB for data persistence. Make sure MongoDB is installed and running locally or use a remote instance.

### License
This project is licensed under the MIT License.