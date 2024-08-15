"use client"; // Mark as a Client Component

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>
        <Button color="inherit">
          <Link href="/addtask">Add Task</Link>
        </Button>
        <Button color="inherit">
          <Link href="/viewtask">View Tasks</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
