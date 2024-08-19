"use client";

import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '100%',
              backgroundImage: 'url("https://images.unsplash.com/photo-1542435503-956c469947f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdyaXRpbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f5f5f5', // Optional background color for contrast
          }}
        >
          <Container>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Your To-Do Application
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              Manage your tasks efficiently with our app.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ marginTop: '20px' }}
              onClick={() => router.push('/addtask')}
            >
              Add New Task
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ marginTop: '20px', marginLeft: '20px' }}
              onClick={() => router.push('/viewtask')}
            >
              View Tasks
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
