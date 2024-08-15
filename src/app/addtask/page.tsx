"use client";

import React from 'react';
import TaskForm from '../../components/TaskForm';
import { Container, Typography } from '@mui/material';

const AddTask: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Add New Task
      </Typography>
      <TaskForm />
    </Container>
  );
};

export default AddTask;
