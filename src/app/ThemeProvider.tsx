// src/app/ThemeProvider.tsx
'use client';

import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';
import { ReactNode } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0B421A',
        },
    },
    typography: {
        fontFamily: 'Gujarati Sangam Mn, sans-serif',
    },
});

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};

export default ThemeProvider;
