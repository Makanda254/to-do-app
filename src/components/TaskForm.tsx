import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation'; 

interface TaskFormProps {
  onSuccess?: () => void; 
}

const TaskForm: React.FC<TaskFormProps> = ({ onSuccess }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('low');
  const [completed, setCompleted] = useState(false);
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
     
      description,
      priority,
      completed,
    };

    try {
      await axios.post('http://localhost:3001/tasks', newTask);
      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/viewtask'); 
      }
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Description"
        variant="outlined"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
          label="Priority"
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Status</InputLabel>
        <Select
          value={completed ? 'completed' : 'notCompleted'}
          onChange={(e) => setCompleted(e.target.value === 'completed')}
          label="Status"
        >
          <MenuItem value="notCompleted">Not Completed</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
