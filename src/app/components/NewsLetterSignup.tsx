// src/app/components/NewsletterSignup.tsx
"use client"
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import EnvelopeImage from '../assets/images/envelope.png'; // Replace with the actual path to the envelope image
import PeopleImage from '../assets/images/people.png'; // Replace with the actual path to the people image
import { Envelope, People } from '../assets/images/images';

const BackgroundContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '40px 20px',
    backgroundColor: '#ffffff', // White background color
});

const SignUpContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0B421A', // Green background color
    padding: '40px',
    borderRadius: '8px',
    position: 'relative',
    width: '85%', // Adjust width as needed
});

const FormContainer = styled(Box)({
    width: '60%',
    padding: '20px',
    color: '#ffffff',
});

const InputField = styled(TextField)({
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
});

const SignUpButton = styled(Button)({
    backgroundColor: '#EAC784',
    color: '#000000',
    '&:hover': {
        backgroundColor: '#d1b574',
    },
});

const PeopleImageContainer = styled(Box)({
    width: '35%',
    height: 'auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40px', // Adjust margin to push the image down
    left: "100px"
});

const EnvelopeContainer = styled(Box)({
    position: 'absolute',
    bottom: '10px', // Adjust position as needed
    left: '10px', // Adjust position as needed
});

const NewsletterSignup: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Full Name:', fullName);
        console.log('Email:', email);
    };

    return (
        <BackgroundContainer>
            <SignUpContainer>
                <FormContainer>
                    <Typography variant="h4" component="div" sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: 56 }}>
                        Sign Up For Our Newsletter
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ marginBottom: '20px', fontSize: 45, fontWeight: "600" }}>
                        For latest updates join the life in mind community.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <InputField
                                    label="Full Name"
                                    variant="filled"
                                    fullWidth
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputField
                                    label="Email Id"
                                    variant="filled"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <SignUpButton type="submit" variant="contained" fullWidth>
                            Sign Me Up!
                        </SignUpButton>
                    </form>
                </FormContainer>
                <PeopleImageContainer>
                    <Image src={People} alt="People" style={{ width: '100%', height: 'auto' }} />
                    <EnvelopeContainer>
                        <Image src={Envelope} alt="Envelope" style={{ width: '80px', height: 'auto' }} />
                    </EnvelopeContainer>
                </PeopleImageContainer>
            </SignUpContainer>
        </BackgroundContainer>
    );
};

export default NewsletterSignup;
