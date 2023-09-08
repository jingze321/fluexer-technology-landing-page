import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import Image from 'next/image';
import { Map as MapIcon } from '@mui/icons-material';
import styles from '../../../styles/SectionTitle.module.css';
import { useTranslation } from 'next-i18next';


// Define the CareerDetailsProps interface
interface CareerDetailsProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CareerDetails: React.FC<CareerDetailsProps> = ({ title, description, imageUrl }) => {
  const descriptionStyle = {
    fontFamily: 'Arial',
    marginBottom: '20px',
    whiteSpace: 'pre-line', // This preserves line breaks
  };

  const { i18n } = useTranslation('common');
  const currentLocale = i18n.language;


  return (
    <Box sx={{ backgroundColor: '#f2f2f2', padding: '20px', marginY: '20px' }} className={`${styles.sectionTitle}`}>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
          <Typography variant="h2" sx={{ fontFamily: 'Arial', fontWeight: 'bold', marginBottom: '10px' }}>
            {title}
          </Typography>
          <Typography  variant={currentLocale === 'en' ? 'body1' : 'h6'} sx={descriptionStyle} textAlign="left">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }} textAlign="center" sx={{ paddingTop: 0 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CareerDetails;
