import Head from 'next/head';
import React from 'react';
import IntroductionContainer from '@/components/IntroductionContainer/IntroductionContainer';
import ExperienceContainer from '@/components/ExperienceContainer/ExperienceContainer';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>심성보 포트폴리오</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="프론트엔드 장인을 꿈꾸는 심성보의 포트폴리오입니다."
        />
        {/* <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_KEY}
      /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no"
        />
      </Head>
      <main>
        <section className="relative flex flex-col">
          <ExperienceContainer />
          <IntroductionContainer />
          <Footer />
          {!!1 && <div>여기는 조건부 통해서 버튼이 들어가게 만들자</div>}
        </section>
      </main>
    </>
  );
};

export default Home;
