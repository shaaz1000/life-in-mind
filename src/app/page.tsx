// src/app/page.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Layout from './layout';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import TheProblem from './components/TheProblem';
import LifeInMindSolution from './components/LifeInMindSolution';
import OurApproach from './components/OurApproach';
import FoundersMessage from './components/FoundersMessage';
import Values from './components/Values';
import GetInTouch from './components/GetInTouch';
import NewsletterSignup from './components/NewsLetterSignup';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Services />
      <TheProblem />
      <LifeInMindSolution />
      <OurApproach />
      <FoundersMessage />
      <Values />
      <GetInTouch />
      <NewsletterSignup />
      <Footer />
    </Layout>
  );
};

export default HomePage;
