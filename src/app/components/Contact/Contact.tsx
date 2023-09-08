import React from 'react';
import Head from 'next/head';
import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import { Room, Email, Phone } from '@mui/icons-material';
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
            <Grid item lg={4}>
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
                      href="https://maps.google.com/?q=Your+Location"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      03-04, Floor 18, 34, Jln Sultan Ismail, Bukit Bintang, 50250 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur
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
                      href="mailto:abc@fluxertechnology.com"
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
                      href="tel:+601212323232"
                    >
                      +6012-123 2323
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={8} xs={12} style={{ height: '100%' }}> {/* Set the height of the Grid item */}
                <div className="map" style={{ height: '100%' }}> {/* Set the height of the map container */}
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.792937356102!2d101.7092350747765!3d3.149256753152402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362b7082a6bd%3A0xf62c902cd442d3cc!2s03-04%2C%20floor%2018%2C%2034%2C%20Jln%20Sultan%20Ismail%2C%20Bukit%20Bintang%2C%2050250%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1694055666168!5m2!1sen!2smy"
                    frameBorder="0"
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
