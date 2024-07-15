// src/app/components/Footer.tsx
"use client"
import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import BackgroundImage from '../assets/images/background.png'; // Replace with the actual path to your background image
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Download, GooglePlay } from '../assets/images/images';

const FooterContainer = styled(Box)({
    position: 'relative',
    width: '100%',
    padding: '40px 20px',
    backgroundColor: '#0B421A', // Fallback color
    backgroundImage: `url("/GreenBackground.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#ffffff',
    zIndex: 1,
});

const FooterContent = styled(Grid)({
    maxWidth: '1200px',
    margin: '0 auto',
    zIndex: 2,
});

const FooterLink = styled(MuiLink)({
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
});

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>About Us</Typography>
                    <FooterLink href="#">About Life In Mind</FooterLink><br />
                    <FooterLink href="#">Team</FooterLink><br />
                    <FooterLink href="#">Careers</FooterLink><br />
                    <FooterLink href="#">Contact us</FooterLink><br />
                    <FooterLink href="#">FAQS</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>Services</Typography>
                    <FooterLink href="#">Mental health care</FooterLink><br />
                    <FooterLink href="#">Therapy</FooterLink><br />
                    <FooterLink href="#">Psychometric Assessments</FooterLink><br />
                    <FooterLink href="#">Physical Health and Wellness</FooterLink><br />
                    <FooterLink href="#">Nutrition Guidance</FooterLink><br />
                    <FooterLink href="#">Yoga Practices</FooterLink><br />
                    <FooterLink href="#">Holistic and Spiritual Health</FooterLink><br />
                    <FooterLink href="#">Sound Therapy Sessions</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>Experts</Typography>
                    <FooterLink href="#">Therapists</FooterLink><br />
                    <FooterLink href="#">Yoga Experts</FooterLink><br />
                    <FooterLink href="#">Nutritionists</FooterLink><br />
                    <FooterLink href="#">Sound Therapist</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>Resource Library</Typography>
                    <FooterLink href="#">Articles</FooterLink><br />
                    <FooterLink href="#">Blogs</FooterLink><br />
                    <FooterLink href="#">Videos</FooterLink><br />
                    <FooterLink href="#">Assessment</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>Associations</Typography>
                    <FooterLink href="#">Mumbai</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>Partners</Typography>
                    <FooterLink href="#">For organisations</FooterLink><br />
                    <FooterLink href="#">For colleges & universities</FooterLink>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <Image src={GooglePlay} alt="Google Play" style={{ marginBottom: '10px', height: 50, width: 130 }} />
                        <Image src={Download} alt="App Store" style={{ height: 50, width: 130 }} />
                    </Box>
                </Grid>

            </FooterContent>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" sx={{ my: "30px", mx: "120px" }}>
                <Typography variant="body2" align="center" sx={{ marginTop: '40px', color: '#ffffff', fontWeight: "bold" }}>
                    © Life in Mind | Privacy Policy | Terms & Conditions | Cancellation Policy | Site Map | Hall of Fame
                </Typography>
                <Grid item xs={12} md={3}>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={5}>
                        <FooterLink href="#"><InstagramIcon style={{ color: '#ffffff', marginRight: '10px' }} /></FooterLink>
                        <FooterLink href="#"><LinkedInIcon style={{ color: '#ffffff', marginRight: '10px' }} /></FooterLink>
                        <FooterLink href="#"><TwitterIcon style={{ color: '#ffffff', marginRight: '10px' }} /></FooterLink>
                        <FooterLink href="#"><PinterestIcon style={{ color: '#ffffff' }} /></FooterLink>
                    </Box>
                </Grid>
            </Box>
            <Typography variant="body2" align="center" sx={{ marginTop: '10px', color: '#ffffff', maxWidth: '1200px', margin: '0 auto', opacity: 0.5 }}>
                LifeInMind, does not deal with medical or psychological emergencies. We are not designed to offer support in crisis situations - including when an individual is experiencing thoughts of self-harm or suicide, or is showing symptoms of severe clinical disorders such as schizophrenia and other psychotic conditions. In these cases, in-person medical intervention is the most appropriate form of help. If you feel you are experiencing any of these difficulties, we would urge you to seek help at the nearest hospital or emergency room where you can connect with a psychiatrist, social worker, counsellor, or therapist in person. We recommend you to involve a close family member or a friend who can offer support. You can also reach out to a suicide hotline in your country of residence: <a href="http://www.healthcollective.in/contact/helplines" style={{ color: '#ffffff' }}>http://www.healthcollective.in/contact/helplines</a>
            </Typography>
        </FooterContainer>
    );
};

export default Footer;
