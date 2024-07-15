// src/app/components/AboutUs.tsx
"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#f7e9d7', // Adjusted lighter color
    color: '#0B421A',
    textAlign: 'left',
    paddingLeft: '100px',
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: '5%', // Adjust this value to move the image more towards the center
        width: '1000px', // Increase width
        height: '1000px', // Increase height
        backgroundImage: 'url("/leaf.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right', // Adjust position
        zIndex: -1,
        opacity: 0.1, // Adjust opacity to make the leaf image subtle
    },
});

const AboutUs: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h3" component="div" sx={{ marginBottom: '20px', fontSize: '64px', fontWeight: 'bold', color: '#0B421A', fontFamily: "Amandine" }}>
                About us
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginBottom: '20px', fontSize: '24px', lineHeight: '1.5', color: '#0B421A' }}>
                At LifeInMind, we believe that everyone's path to well-being is unique. Our founder, Ms. Drashti Sapra, a dedicated mental health counsellor with expertise in health psychology and legal science, started this journey to create a supportive sanctuary for personal growth and development.
            </Typography>
            <Typography variant="body1" component="div" sx={{ marginBottom: '20px', fontSize: '24px', lineHeight: '1.5', color: '#0B421A' }}>
                Our organisation aims to provide a platform that empowers you to prioritise your mental and physical health, enhancing your overall lifestyle. We offer expert-led therapy, personalised nutrition advice, yoga practices, and sound therapy, all tailored to your needs. More than professionals, we are a community here to support you every step of the way.
            </Typography>
            <Typography variant="body1" component="div" sx={{ fontSize: '24px', lineHeight: '1.5', color: '#0B421A' }}>
                Join us, Let’s unclutter the life in mind together!
            </Typography>
        </BackgroundContainer>
    );
};

export default AboutUs;
