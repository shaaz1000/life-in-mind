// src/app/components/Services.tsx
"use client"
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { CommunityTherapy, Nutrition, PsychometricAssessment, SoundTherapy, Therapy, Yoga } from '../assets/images/images';
import Image from 'next/image';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#ffffff', // White background color
    textAlign: 'center',
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: '25%', // Adjust this value to move the image more towards the center
        width: '1000px', // Increase width
        height: '1000px', // Increase height
        backgroundImage: 'url("/bg-leaf.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right', // Adjust position
        zIndex: -1,
    },
});

const ServiceCard = styled(Card)({
    maxWidth: 340,
    background: "transparent",
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(11, 66, 26, 0.1)',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 6px 12px rgba(11, 66, 26, 0.3)',
    },
});

const ServiceCardContent = styled(CardContent)({
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #0B421A',
    borderRadius: '0 0 12px 12px',
    transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: '#0B421A',
        color: '#ffffff',
    },
});

const services = [
    {
        title: "Therapy",
        image: Therapy,
    },
    {
        title: "Psychometric Assessments",
        image: PsychometricAssessment,
    },
    {
        title: "Nutrition",
        image: Nutrition,
    },
    {
        title: "Yoga",
        image: Yoga,
    },
    {
        title: "Sound Therapy",
        image: SoundTherapy,
    },
    {
        title: "Community Support",
        image: CommunityTherapy,
    },
];

const Services: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontSize: 58, fontWeight: 'bold', color: "#0B421A", fontFamily: "Amandine" }}>
                Joy and happiness are meant for you.
            </Typography>
            <Typography variant="h5" component="div" sx={{ marginBottom: '40px' }}>
                How can we help?
            </Typography>
            <Grid container spacing={4}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ServiceCard>
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={340}
                                height={375}
                                style={{ borderRadius: '12px 12px 0 0' }}
                            />
                            <ServiceCardContent>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    {service.title}
                                </Typography>
                            </ServiceCardContent>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </BackgroundContainer>
    );
};

export default Services;
