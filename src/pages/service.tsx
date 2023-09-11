import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from '@/app/components/Common/Hero';
import DisplayComponent from '@/app/components/Service/DisplayComponent';

const Service: React.FC = () => {

 const { t,i18n } = useTranslation('common'); 

 const servicesData = [
     {
       title: {
        en:"PUBLIC OPINION MANAGEMENT",
        cn:"品牌舆情管理服务"
       },
       description:{
        en:"Complete information, quick warning, smart report, superior technology",
        cn:"信息全、预警快、报告智、技术优"
       },
       imgUrl:{
        en:"/assets/images/service/1_en.png",
        cn:"/assets/images/service/1_cn.png"
       },
     },
     {
        title: {
         en:"BRAND SEARCH IMAGE OPTIMIZATION SERVICE",
         cn:"品牌搜索形象优化服务"
        },
        description:{
         en:"BRAND SEARCH IMAGE OPTIMIZATION SERVICE",
         cn:"让品牌内容在搜索引擎上形成品牌结构化展示，提高用户对品牌的认知度和美誉度"
        },
        imgUrl:{
         en:"/assets/images/service/2_en.png",
         cn:"/assets/images/service/2_cn.png"
        },
      },
      {
        title: {
         en:"BRAND SEARCH AND COMMUNICATION SERVICE",
         cn:"品牌搜索传播服务"
        },
        description:{
         en:"BRAND SEARCH IMAGE OPTIMIZATION SERVICE",
         cn:"通过内容、话题、活动等全媒体平台传播，，助力品牌美誉度、形象、知名度全面提升"
        },
        imgUrl:{
         en:"/assets/images/service/3_en.png",
         cn:"/assets/images/service/3_cn.png"
        },
      },
      {
        title: {
         en:"OFFICIAL WEBSITE SEO",
         cn:"官网搜索引擎优化（SEO）"
        },
        description:{
         en:"BRAND SEARCH IMAGE OPTIMIZATION SERVICE",
         cn:"提升官网排名，获取更多搜索优质流量"
        },
        imgUrl:{
         en:"/assets/images/service/4_en.png",
         cn:"/assets/images/service/4_cn.png"
        },
      }
   ];
      

  return (
    <main>
      <Head>
        <title>{`${t('common.services')} - Fluxer Technology`}</title>
      </Head>
      <Hero
        title={t(`common.services`)}
        subheading={t(`about.hero.subHeading`)}
        image="/assets/images/career/career_hero.png"
      />
      {servicesData.map((service, index) => (
        <DisplayComponent
          key={index}
          title={service.title[i18n.language as "en"]}
          description={service.description[i18n.language as "en"]}
          imgUrl={service.imgUrl[i18n.language as "en"]}
          editColor={index%2?"#f6faff":"#fff"}
        />
      ))}

    </main>
  );
};

export default Service;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    const actualLocale = locale || 'en'; 
    return {
      props: {
        ...(await serverSideTranslations(actualLocale, ['common'])),
      },
    };
  }
