import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const FeaturesSection: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5, mb: 3 }}>
        Key Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '200px' }}>
            <Typography variant="h6">Feature 1</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '200px' }}>
            <Typography variant="h6">Feature 2</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, minHeight: '200px' }}>
            <Typography variant="h6">Feature 3</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
