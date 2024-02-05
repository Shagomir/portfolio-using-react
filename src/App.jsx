import { useState } from 'react'

import './App.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Footer from './components/footer'
import Header from './components/header'
import DisplayProjects from './components/projectList';
import Profile from './components/profile';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="false">
        <Box sx={{ bgcolor: '#cfe8fc', height: 'vh' }} >
        <Profile />
        <DisplayProjects />
        </Box>
      </Container>
      <Footer/>
    </React.Fragment>
  );
}


export default App
