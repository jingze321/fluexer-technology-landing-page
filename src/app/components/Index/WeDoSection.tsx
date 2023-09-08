import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Web, MobileFriendly, Language } from '@mui/icons-material';
import { useTranslation } from 'next-i18next'; // Import useTranslation

interface Service {
  title: string;
  description: string;
}

const WhatWeDo: React.FC = () => {
  const { t } = useTranslation('common'); // Use 'common' namespace

  const services: Service[] = t('whatWeDo.services', { returnObjects: true });

  return (
    <Box py={5} id="what-we-do">
      <Container maxWidth="xl">
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          {t('whatWeDo.title')}
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', minHeight: '100%' }}>
                <Box display="flex" justifyContent="center" mb={2}>
                  {index === 0 && <Web fontSize="large" />}
                  {index === 1 && <MobileFriendly fontSize="large" />}
                  {index === 2 && <Language fontSize="large" />}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
