import * as React from 'react';
import Box from '@mui/system/Box';
import Nav from './nav'

export default function Header() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Nav/>
    </Box>
  );
}