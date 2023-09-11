import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Card,
  CardContent,
} from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'next-i18next'

type datatype = {
  imgSrc: string;
  service: {
    en: string;
    cn: string;
  };
  paragraph: {
    en: string;
    cn: string;
  };
};

const Aboutdata: datatype[] = [
  {
    imgSrc: '/assets/images/about/marketing.svg',
    service: {
      en: "Marketing",
      cn: "市场营销",
    },
    paragraph: {
      en: "Enhance your marketing strategies with our expert services.",
      cn: "通过我们的专业服务，提升您的营销策略。",
    },
  },
  {
    imgSrc: '/assets/images/about/seo.svg',
    service: {
      en: "SEO",
      cn: "搜索引擎优化",
    },
    paragraph: {
      en: "Optimize your website's search engine ranking with our SEO expertise.",
      cn: "借助我们的SEO专业知识，优化您网站的搜索引擎排名。",
    },
  },
  {
    imgSrc: '/assets/images/about/coding.svg',
    service: {
      en: "Coding",
      cn: "编码",
    },
    paragraph: {
      en: "Develop cutting-edge software solutions with our coding experts.",
      cn: "与我们的编程专家一起开发尖端的软件解决方案。",
    },
  },
  {
    imgSrc: '/assets/images/about/design.svg',
    service: {
      en: "UI/UX Design",
      cn: "UI/UX设计",
    },
    paragraph: {
      en: "Create beautiful and user-friendly interfaces with our UI/UX design team.",
      cn: "与我们的UI/UX设计团队一起创建美丽且用户友好的界面。",
    },
  },
];


const Provide = () => {

  const { t, i18n } = useTranslation('common'); 

  return (
    <Box id="services">
      <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 5 } }}>
        <Grid container spacing={12}>
          {/* COLUMN-1 */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: { xs: 'center', lg: 'left' },
                p: 5,
                borderRadius: '3xl',
                backgroundColor: '#F6F8FD',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, lineHeight: '81px' }}>
                {t('about.hero.title')}
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{ mb: 3, lineHeight: '33px'}}>
                {t('about.provide.companyDescription')}
              </Typography>
              
              <Typography variant="h6" sx={{mb:1}}style={{ fontWeight: 'bold', textAlign:'left'}}>
                {t('about.provide.ourVision')}:
              </Typography>
              <Typography variant="h6" color="textSecondary" sx={{lineHeight: '33px'}}>
                {t('about.provide.ourVisionDescription')}:
              </Typography>
              {/* <Link href={'/'} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                Learn more
                <Image src={'/assets/provide/arrow.svg'} alt={'arrow'} width={20} height={20} />
              </Link> */}
            </Box>
          </Grid>

          {/* COLUMN-2 */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2} justifyContent="space-around">
              {Aboutdata.map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Card
                    sx={{
                        boxShadow: 5,
                        borderRadius: '16px',
                        backgroundColor: '#F6F8FD', // Change this to your desired color
                        p: 2, // Adding padding
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: '80%', // Set the card's height to 100% of its container
                        width: '80%', // Set the card's width to 100% of its container
                        mx: 'auto', // Center-align the card horizontally
                    }}
                  >
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        height: '100%',
                      }}
                    >
                      <Image src={item.imgSrc} alt={item.imgSrc} width={80} height={80} />
                      <Typography variant="h6" sx={{ mt: 2 }}>
                        {item.service[i18n.language as "en"]}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mt: 1 , mb:4,textAlign:"center" }}>
                        {item.paragraph[i18n.language as "en"]}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Provide;