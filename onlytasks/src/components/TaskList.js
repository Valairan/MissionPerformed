import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onToggleDone }) => {
  return (
    <ul className="mt-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem 
            key={task._id} 
            task={task} 
            onEdit={onEdit} 
            onDelete={onDelete} 
            onToggleDone={onToggleDone}
          />
        ))
      ) : (
        <li className="text-center text-gray-500">No tasks available</li>
      )}
    </ul>
  );
};

export default TaskList;
