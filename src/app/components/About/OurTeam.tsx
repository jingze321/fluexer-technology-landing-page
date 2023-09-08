import React from 'react';
import { Box, Grid, Typography, Container, Paper, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import titleStyles from '@/styles/SectionTitle.module.css';
import { useTranslation } from 'next-i18next';

type datatype = {
  heading: {
    en: string;
    cn: string;
  };
  subheading: {
    en: string;
    cn: string;
  };
};

const ourTeamInfo: datatype = 
  {
    heading: {
      en: "FANTASTIC TEAM",
      cn: "我们的团队",
    },
    subheading: {
      en: "Built around the information search service solution chain, we establish dedicated strategies and execution teams from top to bottom, empowering brand value. By implementing a project responsibility system, we help businesses accurately understand changes in the industry and media environment, grasp the communication value path of the entire marketing chain, create a diversified and scenario-based comprehensive ecosystem of search services, realize the linkage of information to services, and support long-term brand operations and value accumulation.",
      cn: "围绕信息搜索服务解决方案链，由上至下逐一建立专属策略及执行团队，赋能品牌价值。以项目负责制推行服务，帮助企业准确洞察行业与媒体环境的变化，掌握全链营销的传播价值路径，打造多元化、场景化的搜索服务综合生态格局，实现从信息到服务的搜索联动，助力品牌长效运营与价值沉淀。",
    },
  };


const styles = {
  container: {
    maxWidth: 1920,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center both horizontally and vertically
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Adjust this to control the overflow direction
    alignItems: 'center'
  },
};

const OurTeam = () => {
  const isLgScreen = useMediaQuery('(min-width: 1080px)'); // Check if the screen width is "lg" or larger
  const isMdScreen = useMediaQuery('(max-width: 1080px)'); // Check if the screen width is "md" or smaller
  const { t, i18n } = useTranslation('common'); 

  return (
    <Box id="about" py={5} style={{backgroundColor:"rgba(236, 240, 241,0.6)"}}>
      <Container sx={styles.container}>
        <Grid container spacing={4}  className={`${titleStyles.sectionTitle}`} style={{paddingBottom:"0"}}>
          {/* COLUMN-1 */}
          <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h2" align="center" gutterBottom>
              {ourTeamInfo.heading[i18n.language as "en"]}
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: '33px' }} gutterBottom>
              {ourTeamInfo.subheading[i18n.language as "en"]}
            </Typography>
          </Grid>
          {/* COLUMN-2 (Image) */}
          <Grid item xs={12} lg={6} sx={styles.imageContainer}>
            <div style={{ position: 'relative', width: '100%' }}>
              <Image 
                src="/assets/images/about/our_team.png" 
                alt="our-team" 
                layout="responsive"
                width={isLgScreen?700:100} 
                height={isLgScreen?500:50} 
                objectFit="contain"
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
