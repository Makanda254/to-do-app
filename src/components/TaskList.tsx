import React, { useState } from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';
import { Task } from '../store/taskSlice';

interface TaskListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; 
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  const handleStatusToggle = (id: number, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id: number, description: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, description } : task
      )
    );
  };

  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusToggle={handleStatusToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </List>
  );
};

export default TaskList;
