import React from 'react';
import Image from 'next/image';
import { Container, Typography, Grid, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const Footer = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <footer className={'bg-gray-500'} style={{  color: '#fff', padding: '20px 0  0 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">{t('footer.aboutUs')}</Typography>
            <Typography variant="body2">{t('footer.aboutUsText')}</Typography>
            <Box sx={{my:2}}>
              <Image src="/assets/logo/company_full_logo.png" alt='Logo' width={180} height={180}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">{t('footer.links')}</Typography>
            <ul>
              <li>
                <a onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/about-us')} style={{ cursor: 'pointer' }}>
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/service')} style={{ cursor: 'pointer' }}>
                  {t('footer.services')}
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/career')} style={{ cursor: 'pointer' }}>
                  {t('footer.career')}
                </a>
              </li>
              <li>
                <a onClick={() => router.push('/contact-us')} style={{ cursor: 'pointer' }}>
                  {t('footer.contactUs')}
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6">{t('footer.contactInfo')}</Typography>
            <Typography variant="body2">
              {t('footer.address')}
              <br />
              {t('footer.email')}
              <br />
              {t('footer.phone')}
              <br />
              {t('footer.businessHours')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box style={{ backgroundColor: '#222', padding: '10px 0', textAlign: 'center', marginTop:'20px'}}>
        © Copyright 2023 FLUXER TECHNOLOGY SDN BHD . All rights reserved.
      </Box>
    </footer>
  );
};

export default Footer;
