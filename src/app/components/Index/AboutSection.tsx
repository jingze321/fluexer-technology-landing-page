import React from 'react';
import Image from 'next/image';
import { Container, Typography, Paper, Grid, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from '@/styles/SectionTitle.module.css';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import BoltIcon from '@mui/icons-material/Bolt';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AboutUsSection: React.FC = () => {
  const { t } = useTranslation('common');

  // CSS for circular border around icons
  const iconBoxStyle = {
    borderRadius: '50%',
    border: '2px solid ', // Adjust the border color and size as needed
    width: '60px', // Adjust the icon box width and height as needed
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:"#2dc997",
    marginBottom:"10px"
  };

  // CSS for Paper hover effect
  const paperStyle = {
    transition: 'background-color 0.3s, box-shadow 0.3s',
    '&:hover': {
      backgroundColor: '#0a3d62', // Change the background color on hover
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Make the shadow darker on hover
      color:'#fff',
    },
  };

  return (
    <Box className={`${styles.sectionTitle2}`} sx={{ marginY: "30px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Container sx={{ marginTop: "20px" }}>
            <Typography variant="h2" gutterBottom>
              {t('index.about.title')}
            </Typography>
            <Typography variant="h5">
              {t('index.about.description')}
            </Typography>

            <Grid container spacing={3} justifyContent="center" marginTop={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={paperStyle}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px', 
                        }}>
                            <Box sx={iconBoxStyle}>
                                <EmojiObjectsIcon />
                            </Box>
                            <Typography variant="h5" align="center">
                            {t('index.slogan.innovate')}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={paperStyle}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px', 
                        }}>
                            <Box sx={iconBoxStyle}>
                                <BoltIcon />
                            </Box>
                            <Typography variant="h5" align="center">
                                {t('index.slogan.empower')}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={paperStyle}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '20px', 
                        }}>
                            <Box sx={iconBoxStyle}>
                                <ManageHistoryIcon />
                            </Box>
                            <Typography variant="h5" align="center">
                                {t('index.slogan.trasform')}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          className={`${styles.background} ${styles.order2}`}
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <Box style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
            <Image
              src="/assets/images/index/about.png"
              alt="About Us"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsSection;
