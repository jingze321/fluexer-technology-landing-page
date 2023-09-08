import React from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Provide from '../app/components/About/Provide';
import Why from '../app/components/About/Why';

import Hero from '@/app/components/Common/Hero';
import OurTeam from '@/app/components/About/OurTeam';

const About: React.FC = () => {

  const { t } = useTranslation('common');
  return (
    <div>
      <Hero
        title={t(`about.hero.title`)}
        subheading={t(`about.hero.subHeading`)}
        image="/assets/images/career/career_hero.png"
      />
      <Provide />
      <OurTeam/>
      <Why />
    </div>
  );
};

export default About;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const actualLocale = locale || 'en'; 
    return {
      props: {
        ...(await serverSideTranslations(actualLocale, ['common'])),
      },
    };
  }
