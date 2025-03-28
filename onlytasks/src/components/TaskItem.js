import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleDone }) => {
  return (
    <li className="border p-2 mt-2 flex justify-between items-center">
      <div>
        <span className={`font-bold ${task.status === "Done" ? "line-through text-green-500" : ""}`}>
          {task.title}
        </span>
        <p className={`text-sm ${task.status === "Done" ? "line-through text-green-500" : ""}`}>
          {task.description}
        </p>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.status === "Done"}
          onChange={() => onToggleDone(task._id, task.status === "Done" ? "To Do" : "Done")}
          className="mr-2"
        />
        <button onClick={() => onEdit(task)} className="bg-blue-500" >
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} className="bg-blue-500">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
