// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../app/components/Navbar/index';
import Footer from '../app/components/Footer/Footer';
import './../app/globals.css'
import { appWithTranslation } from 'next-i18next';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default appWithTranslation(MyApp);
