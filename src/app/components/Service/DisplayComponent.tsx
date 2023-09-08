import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material'; // Import Button component
import styles from '../../../styles/SectionTitle.module.css';
import Image from 'next/image';
  
interface ServicesSectionProps {
    title: string;
    description: string;
    editColor: string;
  }

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, description, editColor }) => {
  return (
    <Paper className={`${styles.section} ${styles.sectionTitle}`} sx={{margin:0,backgroundColor:editColor}}>
      <Container>
        <Typography variant="h2" className={styles.sectionTitle}>
          {title}
        </Typography>
        <Typography variant="body1" className={styles.sectionDescription}>
          {description}
        </Typography>
            <Box style={{ position: 'relative', width: '100%' }}>
              <Image 
                src="/assets/images/about/our_team.png" 
                alt="our-team" 
                layout="responsive"
                width={200} 
                height={300} 
                objectFit="contain"
              />
            </Box>
      </Container>
    </Paper>
  );
};

export default ServicesSection;
