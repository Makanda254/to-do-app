import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Task } from '../store/taskSlice';

interface TaskItemProps {
  task: Task;
  onStatusToggle: (id: string, completed: boolean) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusToggle, onDelete }) => {
  const handleToggle = async () => {
    try {
      await axios.patch(`http://localhost:3001/tasks/${task.id}`, {
        completed: !task.completed
      });
      onStatusToggle(task.id, !task.completed);
    } catch (error) {
      console.error('Failed to toggle task status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${task.id}`);
      onDelete(task.id);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      <ListItemText
        primary={task.description}
        secondary={`Priority: ${task.priority}`}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
