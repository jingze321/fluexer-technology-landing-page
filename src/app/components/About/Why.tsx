import React from 'react';
import { Box, Grid, Typography, Container, Paper, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface whydata {
  heading: string;
  subheading: string;
}


const styles = {
  container: {
    maxWidth: 1920,
    margin: 'auto',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Adjust this to control the overflow direction
    alignItem: "center"
  },
};

const Why = () => {
  const isLgScreen = useMediaQuery('(min-width: 1080px)'); // Check if the screen width is "lg" or larger
  const isMdScreen = useMediaQuery('(max-width: 1080px)'); // Check if the screen width is "md" or smaller
  const { t, i18n } = useTranslation('common'); // Use the useTranslation hook with the 'common' namespace

  const whydata: whydata[] = [
    {
      heading: t('about.why.quality'),
      subheading: t('about.why.qualityDescription'), 
    },
    {
      heading: t('about.why.communication'),
      subheading: t('about.why.communicationDescription'), 
    },
    {
      heading: t('about.why.reliability'),
      subheading: t('about.why.reliabilityDescription'), 
    },
  ];
  
  return (
    <Box id="about" py={5}>
      <Container sx={styles.container}>
        <Grid container spacing={4}>
          {/* COLUMN-1 (Image) */}
          {isLgScreen && ( // Conditionally render based on screen width
            <Grid item xs={12} lg={6} sx={styles.imageContainer}>
              <div style={{ position: 'relative', width: '100%', }}>
                <Image
                  src="/assets/images/index/about.png" alt="iPad-image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Grid>
          )}

          {/* COLUMN-2 */}
          <Grid item xs={12} lg={6}>
            <Typography variant={isMdScreen ? "h3" : "h5"} align="center" gutterBottom>
              {t('about.why.best')}
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              {t('about.why.description')}
            </Typography>
            
            <Box mt={1} >
              {whydata.map((items, i) => (
                <Paper
                  key={i}
                  elevation={3}
                  sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'flex-start', 
                    mt: 1,
                    boxShadow: "none",
                  }}
                >
                    <CheckCircleIcon sx={{ color: '#90EE90', fontSize: '3rem'}}/>
                  <Box ml={5}>
                    <Typography variant="h6" fontWeight="bold">
                      {items.heading}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" mt={1}>
                      {items.subheading}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Why;
