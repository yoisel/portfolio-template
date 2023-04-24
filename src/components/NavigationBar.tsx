import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        <Button color="inherit">Section 1</Button>
        <Button color="inherit">Section 2</Button>
        <Button color="inherit">Section 3</Button>
        <Button color="inherit">Section 4</Button>
        <Button color="inherit">Section 5</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
