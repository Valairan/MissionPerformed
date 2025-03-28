import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_URL = "http://localhost:5000/tasks";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All"); // New filter state

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks", err);
    }
  };

  const addTask = async (task) => {
    try {
      await axios.post(API_URL, task);
      fetchTasks();
    } catch (err) {
      console.error("Error adding task", err);
    }
  };

  const updateTask = async (task) => {
    if (!task._id) return;
  
    try {
      await axios.put(`${API_URL}/${task._id}`, task);
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      console.error("Error updating task", err);
    }
  };
  

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task", err);
    }
  };

  const toggleDone = async (id, newStatus) => {
    try {
      await axios.put(`${API_URL}/${id}`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      console.error("Error updating task status", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-xl mx-auto bg-white p-4 rounded shadow">
        <TaskForm 
          onSubmit={editingTask ? updateTask : addTask} 
          editingTask={editingTask} 
          setEditingTask={setEditingTask} 
        />

        {/* Filter Buttons */}
        <div className="flex justify-between my-4">
          {["All", "To Do", "Done"].map((status) => (
            <button 
              key={status} 
              onClick={() => setFilter(status)} 
              className={`px-3 py-1 rounded ${filter === status ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Filtered Task List */}
        <TaskList 
          tasks={tasks.filter(task => filter === "All" || task.status === filter)} 
          onEdit={setEditingTask} 
          onDelete={deleteTask} 
          onToggleDone={toggleDone}
        />
      </div>
    </div>
  );
};

export default App;
