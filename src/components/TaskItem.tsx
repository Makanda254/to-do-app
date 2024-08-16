import React, { useState } from 'react';
import { Checkbox, IconButton, ListItem, ListItemText, ListItemSecondaryAction, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import { Task } from '../store/taskSlice';

interface TaskItemProps {
  task: Task;
  onStatusToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, description: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(task.description);

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

  const handleEdit = async () => {
    if (isEditing) {
      try {
        await axios.patch(`http://localhost:3001/tasks/${task.id}`, {
          description: editDescription,
        });
        onEdit(task.id, editDescription);
      } catch (error) {
        console.error('Failed to edit task:', error);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <TextField
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          fullWidth
        />
      ) : (
        <ListItemText
          primary={task.description}
          secondary={`Priority: ${task.priority}`}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        />
      )}
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" onClick={handleEdit}>
          {isEditing ? <SaveIcon /> : <EditIcon />}
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TaskItem;
