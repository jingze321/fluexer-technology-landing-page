import styles from '@/styles/pageNotFound.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

import { Container, Typography, Box,Button } from '@mui/material';

export default function PageNotFound() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{`${t('error.pageNotFound')} - ${t('error.klinikSaiDeepa')}`}</title>
        <meta name="description" content="Your one-stop professional medical clinic services in Kluang" />
        <meta property="og:title" content={t('error.Klinik Sai Deepa')} />
      </Head>
      <Container maxWidth="sm">
        <Box
          minHeight="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className={styles.notfound}>
            <div className={styles.notfound404}>
              <Typography variant="h1" align="center">404</Typography>
            </div>
            <Typography variant="h2" align="center">
              {t('error.pageNotFoundTitle')}
            </Typography>
            <Typography variant="body1" align="center">
              {t('error.pageNotFoundDescription')}
            </Typography>
            <Box mt={2} textAlign="center">
              <Link href={`/`} passHref>
                  {t('error.goToHomepage')}
              </Link>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

