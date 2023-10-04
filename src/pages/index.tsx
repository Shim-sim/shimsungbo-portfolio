import Head from 'next/head';
import React from 'react';
import IntroductionContainer from '@/components/IntroductionContainer/IntroductionContainer';
import ExperienceContainer from '@/components/ExperienceContainer/ExperienceContainer';
import Footer from '@/components/Footer/Footer';
import { useMediaQuery } from '@material-ui/core';
import ScrollTopButton from '@/components/ScrollTopButton';

const Home = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>심성보 포트폴리오</title>
        <link rel="icon" href="/Favicon.png" />
        <meta
          name="description"
          content="프론트엔드 장인을 꿈꾸는 심성보의 포트폴리오입니다."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="lRFH7cY6uIfRbeKAa82PMDB0mxuSP_UsNXT_oOe89eA"
        />
      </Head>
      <main>
        <section className="flex-col">
          <IntroductionContainer />
          <ExperienceContainer />
          <Footer />
          {isOver1100px && <ScrollTopButton />}
        </section>
      </main>
    </>
  );
};

export default Home;
