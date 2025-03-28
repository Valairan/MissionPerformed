import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const taskData = { title, description };

    if (editingTask) {
      onSubmit({ ...taskData, _id: editingTask._id });
    } else {
      onSubmit(taskData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text" 
        placeholder="Task title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="border p-2 w-full mb-2"
      />
      <textarea 
        placeholder="Task description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
