import React from 'react';
import HeroSection from './../app/components/Index/HeroSection';
import FeaturesSection from './../app/components/Index/FeaturesSection';
import WeDoSection from './../app/components/Index/WeDoSection';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ServicesSection from '@/app/components/Index/ServiceSection';
import AboutUsSection from '@/app/components/Index/AboutSection';
import Contact from '@/app/components/Contact/Contact';

const Home: React.FC = () => {
  // const { t } = useTranslation();
  const { t } = useTranslation('common');
  // console.log(t('test'),'tt');
  
  return (
    <div>
      <HeroSection />
      <AboutUsSection/>
      {/* <FeaturesSection /> */}
      {/* <WeDoSection /> */}
      <ServicesSection />
      <Contact/>
    </div>
  );
};

export default Home;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
};