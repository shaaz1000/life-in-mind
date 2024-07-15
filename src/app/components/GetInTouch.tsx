// src/app/components/GetInTouch.tsx
"use client"
import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import { PartnerWithUs, Support, WorkWithUs } from '../assets/images/images';
import Image from 'next/image';


const BackgroundContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
});

const Footer = styled(Box)({
    backgroundColor: '#0B421A', // Footer background color
    color: '#ffffff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '40px',
});

const icons = [
    {
        title: 'Need help finding the right mental health support?',
        subtitle: 'CONNECT WITH US',
        image: WorkWithUs,
        link: '#',
    },
    {
        title: 'Want mental health support for your organisation?',
        subtitle: 'PARTNER WITH US',
        image: PartnerWithUs,
        link: '#',
    },
    {
        title: 'Looking to be a part of lifeinmind’s team as a therapist?',
        subtitle: 'WORK WITH US',
        image: Support,
        link: '#',
    },
];

const GetInTouch: React.FC = () => {
    return (
        <BackgroundContainer>
            <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', fontFamily: "Amandine", fontSize: 35, color: "#0B421A" }}>
                Get in touch with us
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {icons.map((icon, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Box sx={{ textAlign: 'center', padding: '20px' }}>
                            <Image src={icon.image} alt={icon.title} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                            <Typography variant="body1" component="div" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                {icon.title}
                            </Typography>
                            <Link href={icon.link} sx={{ color: '#0B421A', fontWeight: 'bold', textDecoration: 'underline' }}>
                                {icon.subtitle}
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Footer>
                <Typography variant="body2">
                    If you didn’t find what you were looking for, please mail us at hello@lifeinmind.in. We’re here for you – for anything you might need.
                </Typography>
            </Footer>
        </BackgroundContainer>
    );
};

export default GetInTouch;
