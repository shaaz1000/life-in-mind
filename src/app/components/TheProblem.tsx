// src/app/components/TheProblem.tsx
"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)({
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#E0E7E2', // Background color
    textAlign: 'center',
});

const TheProblem: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', fontFamily: "Amandine", color: "#0B421A" }}>
                The Problem
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginBottom: '20px', fontSize: '28px', color: "#0B421A" }}>
                In our modern, fast-paced lives, mental, physical, and spiritual well-being is frequently neglected due to the stresses of daily life. Many people feel overwhelmed and lack accessible, personalized support to manage these challenges effectively.
            </Typography>
        </BackgroundContainer>
    );
};

export default TheProblem;
