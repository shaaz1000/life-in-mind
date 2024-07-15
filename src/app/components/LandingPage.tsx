// src/app/components/LandingPage.tsx
"use client"
import React from 'react';
import { Box, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage: 'url("/ImageBackground.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
});

const SubscribeButton = styled(Button)({
    backgroundColor: 'white',
    color: '#0B421A',
    padding: '10px 20px',
    borderRadius: '25px',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: 'white',
    },
});

const SwitchContainer = styled(Box)({
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
});

const LandingPage: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h2" sx={{ mt: "100px", mx: "100px", fontSize: "58px" }}>
                Your Journey to Mental Wellness
            </Typography>
            <Typography variant="h2" sx={{ mx: "100px", fontSize: "58px" }}>
                and a Better Lifestyle Starts Here.
            </Typography>
            <Typography variant="h4" sx={{ mx: "100px", mt: "100px" }}>
                Welcome to Life In Mind -
            </Typography>
            <Typography variant="h4" sx={{ mx: "100px", fontWeight: "bold" }}>
                Where Wellness Begins Within.
            </Typography>
            <SubscribeButton variant="contained" sx={{ mx: "100px", mt: "30px" }}>
                Subscribe to Newsletter
            </SubscribeButton>

            <SwitchContainer>
                <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Worry"
                    labelPlacement="start"
                />
                <FormControlLabel
                    control={<Switch defaultChecked color="success" />}
                    label="Peace"
                    labelPlacement="start"
                />
            </SwitchContainer>
        </BackgroundContainer>
    );
};

export default LandingPage;
