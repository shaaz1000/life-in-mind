// src/app/components/LifeInMindSolution.tsx
"use client"
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#5D8C6E',
    paddingLeft: "100px",
    paddingRight: "100px",
    textAlign: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/bg-leaf.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        opacity: 0.1,
        zIndex: -1,
    },
});

const WhiteCard = styled(Paper)({
    margin: '40px 0',
    padding: '20px',
    backgroundColor: '#ffffff', // White background color
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: "80px",
    paddingBottom: "80px"
});

const QuoteIcon = styled(Typography)({
    fontSize: '64px',
    fontWeight: 'bold',
    color: '#0B421A',
    marginRight: '10px', // Space between icon and text
});
const LifeInMindSolution: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h4" component="div" sx={{ fontFamily: "Amandine", fontSize: 58, marginBottom: '20px', fontWeight: 'bold', color: '#ffffff' }}>
                Life In Mind Solution
            </Typography>
            <Typography variant="body1" component="div" sx={{ textAlign: "left", fontSize: 36, marginBottom: '40px', color: '#ffffff' }}>
                Introducing the LifeInMind Path, a proactive and personalised workflow that guides you towards mental well-being and internal healing, inspired by the compassionate support and expertise of our community. Embark on this transformative journey and embrace a healthier life today!
                <br /><br />
                “Enhance your life with personalised support in mental health and self-care from our experts, all from the comfort of your home."
            </Typography>
            <WhiteCard>
                <Typography variant="h5" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: 58, color: '#604C4C', fontFamily: "Amandine", }}>
                    Our Mission
                </Typography>
                <Typography variant="body1" component="div" sx={{ color: '#604C4C', fontSize: '35px', textAlign: "left" }}>
                    Our mission is to empower you with the platform, support, and activities that cater to your individual journey, so that you can prioritise mental and physical health and enhance your overall lifestyle.
                </Typography>
            </WhiteCard>
            <Box display="flex" alignItems="flex-start">
                <QuoteIcon variant="h3">“</QuoteIcon>
            </Box>
            <Typography variant="body1" component="div" sx={{ marginBottom: '40px', color: '#ffffff', fontSize: '40px', fontWeight: "bold" }}>
                From your first step towards well-being to a balanced and fulfilling life, we are here to help you heal, grow, and find peace in your mind, body, and soul.
            </Typography>
            <Box display="flex" justifyContent="flex-end" alignItems="flex-end" marginTop="20px">
                <QuoteIcon variant="h3">”</QuoteIcon>
            </Box>
        </BackgroundContainer>
    );
};

export default LifeInMindSolution;
