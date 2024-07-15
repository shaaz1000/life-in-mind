// src/app/components/Values.tsx
"use client"
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { ClientFirst, Excellence, Inclusivity, Integrity, Kindness, Learning, Ownership, Respect, Transparency, Velocity } from '../assets/images/images';
import Image from 'next/image';


const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/background1.png")', // Path to your background image
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        zIndex: -1,
    },
});

const ValueCard = styled(Box)({
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const icons = [
    { title: 'Client First', image: ClientFirst },
    { title: 'Kindness', image: Kindness },
    { title: 'Integrity', image: Integrity },
    { title: 'Respect', image: Respect },
    { title: 'Transparency', image: Transparency },
    { title: 'Velocity', image: Velocity },
    { title: 'Learning Culture', image: Learning },
    { title: 'Ownership', image: Ownership },
    { title: 'Excellence', image: Excellence },
    { title: 'Inclusivity', image: Inclusivity },
];

const Values: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#0B421A', fontFamily: "Amandine" }}>
                Our Values Define Us
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginBottom: '40px', color: '#0B421A' }}>
                At Life In Mind, our core values are deeply embedded in every aspect of our operations, guiding our commitment to enhancing lifestyles, promoting self-care, and delivering exceptional mental health care. Here’s what drives us:
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {icons.map((icon, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <ValueCard>
                            <Image src={icon.image} alt={icon.title} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: "black" }}>
                                {icon.title}
                            </Typography>
                        </ValueCard>
                    </Grid>
                ))}
            </Grid>
        </BackgroundContainer>
    );
};

export default Values;
