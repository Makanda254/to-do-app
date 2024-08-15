import React, { useState } from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { Task } from '../store/taskSlice';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // Update to allow state modification
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleStatusToggle = (id: string, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusToggle={handleStatusToggle}
          onDelete={handleDelete}
        />
      ))}
    </List>
  );
};

export default TaskList;
