import React from 'react';
import Head from 'next/head';

import Contact from '@/app/components/Contact/Contact';

import { GetStaticPropsContext } from 'next';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ContactUsPage = ({ locale = 'en' }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>{`${t('common.contact')} - Fluxer Technology`}</title>
      </Head>
      <Contact/>
    </div>
  );
};

export default ContactUsPage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const defaultLocale = locale || 'en';
  return {
    props: {
      ...(await serverSideTranslations(defaultLocale, ['common'])),
    },
  };
}
