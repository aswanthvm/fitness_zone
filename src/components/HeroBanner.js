import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography 
      color="#FF2625" 
      fontWeight="600" 
      fontSize="26px"
      sx={{ 
        animation: 'fadeInDown 0.8s ease-out',
        '@keyframes fadeInDown': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }}
    >
      Fitness Club
    </Typography>
    <Typography 
      fontWeight={700} 
      sx={{ 
        fontSize: { lg: '44px', xs: '40px' },
        background: 'linear-gradient(135deg, #FF2625 0%, #FF6B6B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'fadeInUp 1s ease-out',
        '@keyframes fadeInUp': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }} 
      mb="23px" 
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography 
      fontSize="22px" 
      fontFamily="Alegreya" 
      lineHeight="35px"
      sx={{
        color: '#666',
        animation: 'fadeIn 1.2s ease-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      }}
    >
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a 
        href="#exercises" 
        style={{ 
          marginTop: '45px', 
          textDecoration: 'none', 
          width: '200px', 
          textAlign: 'center', 
          background: 'linear-gradient(135deg, #FF2625 0%, #FF4444 100%)', 
          padding: '14px', 
          fontSize: '22px', 
          textTransform: 'none', 
          color: 'white', 
          borderRadius: '50px',
          boxShadow: '0 8px 25px rgba(255, 38, 37, 0.3)',
          transition: 'all 0.3s ease',
          display: 'inline-block'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-3px)';
          e.target.style.boxShadow = '0 12px 35px rgba(255, 38, 37, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(255, 38, 37, 0.3)';
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography 
      fontWeight={600} 
      color="#FF2625" 
      sx={{ 
        opacity: '0.08', 
        display: { lg: 'block', xs: 'none' }, 
        fontSize: '200px',
        background: 'linear-gradient(135deg, #FF2625 0%, #FFB6B6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      Exercise
    </Typography>
    <img 
      src={HeroBannerImage} 
      alt="hero-banner" 
      className="hero-banner-img" 
      style={{
        animation: 'floatAnimation 3s ease-in-out infinite',
        filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.15))'
      }}
    />
  </Box>
);

export default HeroBanner;
