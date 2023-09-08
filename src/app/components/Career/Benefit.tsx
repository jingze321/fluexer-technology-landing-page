import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { LocalHospital, School,AttachMoney,Balance } from '@mui/icons-material'; // Import Material-UI icons
import styles from '../../../styles/SectionTitle.module.css';
import { useTranslation } from 'next-i18next'; // Import i18n hook

const Benefit: React.FC = () => {

    const { t } = useTranslation('common'); // Use the common namespace

    const services = [
        {
          icon: <AttachMoney sx={{ color: '#37517e', fontSize: '48px' }} />,
          title: t('benefit.items.0.title'),
          description: t('benefit.items.0.description'),
        },
        {
          icon: <LocalHospital sx={{ color: '#37517e', fontSize: '48px' }} />,
          title: t('benefit.items.1.title'),
          description: t('benefit.items.1.description'),
        },
        {
          icon: <School sx={{ color: '#37517e', fontSize: '48px' }} />,
          title: t('benefit.items.2.title'),
          description: t('benefit.items.2.description'),
        },
        {
          icon: <Balance sx={{ color: '#37517e', fontSize: '48px' }} />,
          title: t('benefit.items.3.title'),
          description: t('benefit.items.3.description'),
        }
      ];
      

  return (
    <div>
      <Container className={`${styles.sectionTitle}`}>
        <Typography variant="h2" sx={{ fontFamily: 'Arial', fontWeight: 'bold', marginBottom: '10px' }} >
            {t('benefit.title')}
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              lg={3}
              data-aos="zoom-out"
              data-aos-delay={index * 200}
              sx={{
                marginY: '20px', // Add margin
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px',
                  height: '100%',
                  border: 'none',
                  transition: 'box-shadow 0.3s, transform 0.3s', // Smooth box shadow and transform transition
                  '&:hover': {
                    borderTop: '2px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-5px)',
                    // Change text color to light blue on hover
                    color: '#37517e',
                  },
                }}
              >
                <div style={{ textAlign: 'center', flex: '1' }}>
                  {service.icon}
                  <Typography variant="h5">{service.title}</Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Benefit;
