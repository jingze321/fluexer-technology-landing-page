import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subheading: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, subheading, image }) => {
  return (
    <Box
      position="relative"
      height="300px" // Set the fixed height
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center vertically
        }}
      >
        <Container>
          <Paper
            style={{
              padding: '20px',
              boxShadow: 'none',
              backgroundColor: 'transparent',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <Typography variant="h2" gutterBottom style={{ textTransform: 'uppercase' }}>
              {title}
            </Typography>
            <div style={{ borderBottom: '2px solid #fff', width: '60px', margin: '0 auto 20px' }} />
            {subheading && <Typography variant="h5">{subheading}</Typography>}
          </Paper>
        </Container>
      </div>
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ position: 'absolute', zIndex: -1, filter: 'brightness(0.6)' }}
      />
    </Box>
  );
};

export default Hero;
