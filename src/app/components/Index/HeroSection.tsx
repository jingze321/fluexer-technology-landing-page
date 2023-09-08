import React from 'react';
import { Box, Container, Typography, Button, CssBaseline, useMediaQuery } from '@mui/material';
import styles from '@/styles/SectionTitle.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const isMdScreen = useMediaQuery('(min-width: 960px)'); // Check if the screen width is "md" or larger

  const handleServiceButtonClick = (link: string) => {
    router.push(link); 
  };


  return (
    <Box
      id="intro-example"
      className = {styles.sectionTitle3}
      sx={{
        height: '100vh', 
        backgroundImage: `url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')`,
        backgroundSize: '100% 100%', // Set background size to cover entire width and height
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <CssBaseline />
      <div
        className="mask"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column', // Set flex direction to column
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
        }}
      >
        <Container sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ color: 'white', mb: 3 }}>
            {t('index.heroSection.title')}
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', mb: 4 }}>
            {t('index.heroSection.subtitle')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent:  'center', // Conditionally change justifyContent
              alignItems: 'center',
              flexWrap: 'wrap', // Allow items to wrap to the next line
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ m: 2, color: 'white' }}
              rel="nofollow"
              onClick={() => handleServiceButtonClick("/about-us")}
              >
              {t('index.heroSection.aboutUsButton')}
            </Button>
            {/* <Button
              variant="outlined"
              color="inherit"
              size="large"
              sx={{
                m: 2,
                color: 'white', // Push the button to the right on md and above screens
              }}
              href="https://mdbootstrap.com/docs/standard/"
              target="_blank"
            >
              Download MDB UI KIT
            </Button> */}
          </Box>
        </Container>
      </div>
    </Box>
  );
};

export default HeroSection;
