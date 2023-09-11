import React from 'react';
import Head from 'next/head';
import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import { Room, Email, Phone, LinkedIn, Facebook } from '@mui/icons-material'; // Import LinkedIn and Facebook icons
import styles from '@/styles/SectionTitle.module.css';
import { GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Box sx={{ marginY: '2rem' }}>
        <Container className={styles.sectionTitle}>
          <Box sx={{ my: 2 }}>
            <Typography variant="h2" gutterBottom>
              {t('contact.title')}
            </Typography>
            <Typography variant="body1">
              {t('contact.description')}
            </Typography>
          </Box>
        </Container>

        <Container>
          <Grid container spacing={5}>
            <Grid item lg={4} xs={12}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h3" gutterBottom sx={{ fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: 600, fontSize: '24px' }}>
                  {t('contact.getInTouch')}
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey' }}>
                  {t('contact.getInTouchDescription')}
                </Typography>

                <br />

                {/* Location */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Room sx={{ flexShrink: 0, fontSize: '24px', color: '#0189a1' }} />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: '600', color: '#485664' }}>
                      {t('contact.location')}
                    </Typography>
                    <a
                      href="https://goo.gl/maps/U1R4BEhJap9aVyNe9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Suite 18.03-18.04, 18th Floor, Wisma Chuang, 34 Jalan Sultan Ismail, 50250 Kuala Lumpur
                    </a>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ flexShrink: 0, fontSize: '24px', color: '#0189a1' }} />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: '600', color: '#485664' }}>
                      {t('contact.email')}
                    </Typography>
                    <a
                      href="fluxertechnology@gmail.com"
                    >
                      {t('contact.emailAddress')}
                    </a>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Call */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Phone sx={{ flexShrink: 0, fontSize: '24px', color: '#0189a1' }} />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="h4" sx={{ fontSize: '18px', fontWeight: '600', color: '#485664' }}>
                      {t('contact.call')}
                    </Typography>
                    <a
                      href="tel:+60321105668"
                    >
                      03-2110 5668
                    </a>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: {lg:'flex-start',sm:'center'}, marginTop: '1rem', textAlign: 'center' }}>
                  {/* LinkedIn */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px', // Set the desired width
                      height: '48px', // Set the desired height
                      borderRadius: '50%', // Make it round
                      backgroundColor: '#0072b1', // LinkedIn blue color
                      color: '#fff', // Text color
                      cursor: 'pointer', // Add cursor pointer on hover
                      marginRight: '1rem', // Add some margin to separate from the Facebook icon
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/company/fluxertechnology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <LinkedIn />
                    </a>
                  </div>

                  {/* Facebook */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px', // Set the desired width
                      height: '48px', // Set the desired height
                      borderRadius: '50%', // Make it round
                      backgroundColor: '#1877F2', // Facebook blue color
                      color: '#fff', // Text color
                      cursor: 'pointer', // Add cursor pointer on hover
                    }}
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=61550588572554"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <Facebook />
                    </a>
                  </div>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={8} xs={12} style={{ height: '100%' }}> {/* Set the height of the Grid item */}
                <div className="map" style={{ height: '100%' }}> {/* Set the height of the map container */}
                    <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7937118439904!2d101.70878487497114!3d3.1490542968263555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362b76cf4455%3A0x3e292e465ffc75b6!2sChuang%20Wisma!5e0!3m2!1sen!2smy!4v1694412015706!5m2!1sen!2smy"                     frameBorder="0"
                    allowFullScreen
                    width="100%"
                    height="100%" // Set the height to 100%
                    style={{ minWidth: '100%', height:'400px' }}
                    />
                </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Contact;
