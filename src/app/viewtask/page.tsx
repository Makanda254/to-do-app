"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '../../components/TaskList';
import { Task } from '../../store/taskSlice';
import { Container, Typography } from '@mui/material';

const ViewTasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Task List
      </Typography>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </Container>
  );
};

export default ViewTasks;
