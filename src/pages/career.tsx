import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

import Hero from '@/app/components/Common/Hero';
import Tab3Content from '@/app/components/Career/Benefit';
import PositionSection from '@/app/components/Career/Position';
import CareerDetails from '@/app/components/Career/CareerDetails';

import { GetStaticPropsContext } from 'next';
import Benefit from '@/app/components/Career/Benefit';

export default function PageNotFound() {
  const { t } = useTranslation('common');

  return (
    <>
      <Hero
        title={t(`common.career`)}
        subheading=""
        image="/assets/images/career/career_hero.png"
        />
      <PositionSection/>
      <CareerDetails
        title={t('contact.aboutFluxerTitle')}
        description={t('contact.aboutFluxerDescription')} 
        imageUrl="/assets/images/career/career_hero.png"
      />
      <Benefit/>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const actualLocale = locale || 'en'; 
    return {
      props: {
        ...(await serverSideTranslations(actualLocale, ['common'])),
      },
    };
  }


