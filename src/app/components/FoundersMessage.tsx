// src/app/components/FoundersMessage.tsx
"use client"
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { founder } from '../assets/images/images';
import Image from 'next/image';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#EAE7E5', // Background color
    textAlign: 'left',
});

const MessageContent = styled(Box)({
    maxWidth: '800px',
    padding: '20px',
    background: "transparent",
    // backgroundColor: '#ffffff', // White background for the content box
    // borderRadius: '16px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto', // Align to the right
});

const QuoteIcon = styled(Typography)({
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#0B421A',
    marginRight: '10px', // Space between icon and text
});

const FoundersMessage: React.FC = () => {
    return (
        <BackgroundContainer>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
                    <Image
                        alt="Ms. Drashti Sapra"
                        src={founder} // Replace with the actual path to the image
                        width={300}
                        height={300}
                    // style={{ borderRadius: '50%' }}
                    />
                    <Typography variant="h6" component="div" sx={{ marginTop: '20px', fontSize: 35, fontWeight: 'bold', color: '#0B421A' }}>
                        Ms. Drashti Sapra
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ color: '#0B421A', fontSize: 35 }}>
                        CEO & FOUNDER
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <MessageContent>
                        <Box display="flex" alignItems="flex-start">
                            <QuoteIcon variant="h3">“</QuoteIcon>

                        </Box>
                        <Typography variant="body1" sx={{ fontSize: '24px', lineHeight: '1.6', color: '#0B421A' }}>
                            With over 1.4 billion people, India is a nation of immense diversity and unique challenges. At LifeInMind, we aim to revolutionise mental health, lifestyle, and self-care services, making wellness accessible and transformative for everyone.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '24px', lineHeight: '1.6', color: '#0B421A', marginTop: '20px' }}>
                            Our vision is to provide trusted mental and physical healthcare across India, both online and offline, around the clock, every single day. We have dedicated ourselves to providing mental and physical healthcare that is both affordable and accessible, promoting real improvements in individuals' mental and physical well-being.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '24px', lineHeight: '1.6', color: '#0B421A', marginTop: '20px' }}>
                            Join us on a journey to a healthier, and more fulfilling life in mind. With our compassionate community, you're never alone on your path to well-being.
                        </Typography>
                        <Box display="flex" justifyContent="flex-end" alignItems="flex-end" marginTop="20px">
                            <QuoteIcon variant="h3">”</QuoteIcon>
                        </Box>
                    </MessageContent>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
};

export default FoundersMessage;
