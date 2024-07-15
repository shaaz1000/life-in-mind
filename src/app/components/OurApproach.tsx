// src/app/components/OurApproach.tsx
"use client"
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    background: 'linear-gradient(to bottom, #5D8C6E 50%, #EAE7E5 50%)', // Split background color
    textAlign: 'center',
    zIndex: 1,
});

const ApproachPaper = styled(Paper)({
    margin: '40px auto',
    padding: '40px 20px',
    maxWidth: '800px',
    backgroundColor: '#FFFFFF', // White background for the paper
    borderRadius: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
});

const OurApproach: React.FC = () => {
    return (
        <BackgroundContainer>
            <ApproachPaper>
                <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', fontFamily: "Amandine", fontSize: "58px", color: '#604C4C' }}>
                    Our Approach
                </Typography>
                <Typography variant="body1" component="div" sx={{ fontSize: '20px', lineHeight: '1.6', color: '#604C4C' }}>
                    With our expert-led care, which includes therapy, nutrition advice, yoga, and sound therapy, you can achieve a healthier and more balanced life, unlocking your potential for growth and self-improvement.
                </Typography>
            </ApproachPaper>
        </BackgroundContainer>
    );
};

export default OurApproach;
