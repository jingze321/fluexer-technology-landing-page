import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material'; // Import Button component
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'; // Import useRouter
import styles from '../../../styles/SectionTitle.module.css';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ImageIcon from '@mui/icons-material/Image';
import LanguageIcon from '@mui/icons-material/Language';
import ChatIcon from '@mui/icons-material/Chat';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const servicesData = [
    {
      icon: <BusinessCenterIcon fontSize="large" style={{ color: '#0a3d62' }} />,
      title: t('index.service1'),
      description: t('services.description1'),
    },
    {
      icon: <ImageIcon fontSize="large" style={{ color: '#0a3d62' }} />,
      title: t('index.service2'),
      description: t('services.description2'),
    },
    {
      icon: <LanguageIcon fontSize="large" style={{ color: '#0a3d62' }} />,
      title: t('index.service3'),
      description: t('services.description3'),
    },
    {
      icon: <ChatIcon fontSize="large" style={{ color: '#0a3d62' }} />,
      title: t('index.service4'),
      description: t('services.description4'),
    },
  ];

  const handleServiceButtonClick = () => {
    router.push('/service'); // Redirect to /service
  };

  return (
    <Paper className={`${styles.section} ${styles.sectionTitle}`}>
      <Container>
        <Typography variant="h2" className={styles.sectionTitle}>
          {t('index.services.title')}
        </Typography>
        <Typography variant="body1" className={styles.sectionDescription}>
          {t('index.services.description')}
        </Typography>
        <Grid
          container
          spacing={4}
          marginY={4}
          justifyContent="center"
          display={'flex'}
          flexGrow={1}
          alignItems="stretch"
        >
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                className={styles.boxBorder}
              >
                <div className={styles.iconBox}>
                  {service.icon}
                  <h4 className={styles.iconBoxTitle}>{service.title}</h4>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginY: '20px',
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={handleServiceButtonClick}
          >
            {t('common.learnMore')}
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default ServicesSection;
