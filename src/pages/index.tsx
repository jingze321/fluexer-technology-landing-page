import React from 'react';
import Head from 'next/head'; 
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import HeroSection from '@/app/components/Index/HeroSection';
import ServicesSection from '@/app/components/Index/ServiceSection';
import AboutUsSection from '@/app/components/Index/AboutSection';
import Contact from '@/app/components/Contact/Contact';

const Home: React.FC = () => {

  const { t } = useTranslation('common');
  
  return (
    <div>
      <Head>
        <title>{`${t('common.home')} - Fluxer Technology`}</title>
      </Head>
      <HeroSection />
      <AboutUsSection/>
      <ServicesSection />
      <Contact/>
    </div>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const actualLocale = locale || 'en'; 
  return {
    props: {
      ...(await serverSideTranslations(actualLocale, ['common'])),
    },
  };
}