import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 16,
    marginTop: 16,
  },
  heading: {
    marginBottom: 16,
  },
  image: {
    width: '100%', // Adjust the width as needed
    height: 'auto', // Maintain aspect ratio
  },
}));

const AboutPage: React.FC = () => {
  const classes = useStyles();

  return (
      <Paper className={classes.root} elevation={3}>
        <Grid container spacing={3}>
          {/* Vision Section */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.heading}>
              Our Vision
            </Typography>
            <Typography variant="body1">
              Your vision statement goes here. Describe your long-term goals, aspirations, and what you aim to achieve as a company.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="Vision" className={classes.image} />
          </Grid>

          {/* Mission Section */}
          <Grid item xs={12} sm={6}>
            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="Mission" className={classes.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" className={classes.heading}>
              Our Mission
            </Typography>
            <Typography variant="body1">
              Your mission statement goes here. Explain the purpose of your company, the value you provide to clients, and your core values.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
  );
};

export default AboutPage;
