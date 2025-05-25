import { ThemeOptions } from '@mui/material';

export const grayscaleTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#E0E0E0' // Lighter shade for higher contrast
    },
    secondary: {
      main: '#B0B0B0' // Adjusted for better contrast with primary
    },
    background: {
      default: '#1C1C1C', // Darker background for more contrast
      paper: '#2E2E2E' // Slightly lighter than default background
    },
    text: {
      primary: '#FFFFFF', // White text for high contrast
      secondary: '#CCCCCC' // Slightly dimmed white for secondary text
    },
    divider: '#444444' // More noticeable dividers
  }
};
