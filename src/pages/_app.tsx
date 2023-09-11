// pages/_app.tsx
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Navbar from '../app/components/Navbar/index';
import Footer from '../app/components/Footer/Footer';
import './../app/globals.css'
import { appWithTranslation } from 'next-i18next';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>{`Fluxer Technology`}</title>
        <link rel="icon" href="/assets/logo/company_logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default appWithTranslation(MyApp);
