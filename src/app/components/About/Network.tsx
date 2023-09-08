import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/bangladesh.svg",
        country: "Bangladesh",
        paragraph: 'Discover the financial heart of Bangladesh with our currency exchange services.',
    },
    {
        imgSrc: "/assets/network/america.svg",
        country: "United States",
        paragraph: 'Explore seamless currency conversion with the US Dollar for your global transactions.',
    },
    {
        imgSrc: "/assets/network/australia.svg",
        country: "Australia",
        paragraph: 'Experience the convenience of exchanging Australian Dollars for your travel and business needs.',
    },
    {
        imgSrc: "/assets/network/china.svg",
        country: "China",
        paragraph: 'Unlock the potential of the Chinese Yuan for your cross-border transactions.',
    },
]

const Network = () => {

    const router = useRouter();
    const { t, i18n } = useTranslation('common');
    const { locale } = router;

    return (
        <Box sx={{ background: '#ADD8E6' }} id="project" py={5}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'system-ui',
                    }}
                >
                    {/* Explore Our Currency <br /> Exchange Options. */}
                    {t('network.title')}
                </Typography>

                <Image src={'/assets/network/map.png'} alt={'map-image'} width={1400} height={800} />

                <Grid container spacing={4}>
                    {Aboutdata.map((item, i) => (
                        <Grid item key={i} xs={12} sm={6} md={3} >
                            <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                                    <Typography variant="h4" className="dynamic-font" style={{ fontSize: `${28 - Math.min(8, item.country.length)}px` }}>
                                        {item.country}
                                    </Typography>
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Typography variant="body1">{item.paragraph}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Network;
