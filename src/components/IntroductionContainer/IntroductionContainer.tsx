import React from 'react';
import FadeInContent from '@/components/gsap/FadeInContent';
import FadeInHeaderText from '@/components/gsap/FadeInHeaderText';
import FadeInBodyText from '@/components/gsap/FadeInBodyText';
import Image from 'next/image';
import Link from 'next/link';
import SkyPoint from '../SkyPoint';
import ArrowDown from 'public/ArrowDown.svg';
import Sungbo from 'public/sungbo.jpeg';

const IntroductionContainer = () => {
  return (
    <section className="flex relative h-screen w-screen bg-[#202224] text-white tablet:flex-col tablet:h-[130vh]">
      <FadeInContent delay={1}>
        {/*사이드 바*/}
        <aside className="flex flex-col justify-between items-center w-[20vw] h-full tablet:w-screen tablet:h-full tablet:gap-y-[30px]">
          <div className="flex relative flex-col justify-center mt-[57px] gap-y-[15px] tablet:gap-y-[5px]">
            <Link
              href="https://github.com/Shim-sim"
              target={'_blank'}
              className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent"
            >
              GitHub<SkyPoint>.</SkyPoint>
            </Link>
            <Link
              href={'https://www.linkedin.com/in/shim-sungbo-773370294'}
              target={'_blank'}
              className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent"
            >
              LinkedIn<SkyPoint>.</SkyPoint>
            </Link>
            <Link
              href={
                'https://www.notion.so/shimsungbo/ecb1ac8e72064f0d916a492842109371?pvs=4'
              }
              target={'_blank'}
              className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent"
            >
              Notion<SkyPoint>.</SkyPoint>
            </Link>
          </div>

          {/*바텀 컨테이너 */}
          <div className="flex mb-[100px] flex-col justify-center items-center">
            <a className=" no-underline text-white text-[16px] hover:text-gray-400">
              shimdb96@gamil.com
            </a>
            <p className="text-white ml-3">Last update: 2023.10.02</p>
          </div>
        </aside>
      </FadeInContent>

      {/* 메인 */}
      <article className="flex font-semibold relative flex-col justify-center items-center w-[80vw] h-full  tablet:w-screen tablet:h-[200vh] mobile:w-screen mobile:h-[200vh]">
        <FadeInHeaderText delay={1.5}>
          <span className=" text-[50px] tablet:text-[40px] mobile:text-[28px]">
            기록과 공유를 좋아하는
          </span>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <span className="text-[85px] tablet:text-[70px] mobile:text-[38px]">
            <span className={` from-indigo-500 underline decoration-sky-500`}>
              심성보
            </span>
          </span>
          <span className=" text-[50px] tablet:text-[40px] mobile:text-[28px]">
            입니다.
          </span>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <div className="flex font-semibold flex-col justify-center items-center">
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              프론트엔드 개발자 심성보입니다.
            </span>
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              기술을 공유하고 문서화하는것을 좋아합니다.
            </span>
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              공유의 중요성을 잘 알기에 항상 새기고 실천하기위해 노력합니다.
            </span>
          </div>
        </FadeInBodyText>

        {/* 메인 이미지 */}
        <div className="absolute left-[1%] top-0 opacity-50 w-screen tablet:absolute tablet:left-0 mobile:left:0 mobile:absolute">
          <Image
            src={Sungbo}
            alt="background-image"
            className="w-[80vw] h-screen tablet:w-screen mobile:w-screen"
          />
        </div>

        {/*여기에 Arrow button 추가 */}
        <FadeInContent delay={3.5}>
          <div className="mt-[100px] m-0 p-0 rounded-2xl flex items-center justify-center animate-bounce">
            <ArrowDown
              fill="rgb(42,169,224)"
              width="20%"
              height="10%"
              viewBox="0 1 14 6"
            />
          </div>
        </FadeInContent>
      </article>
    </section>
  );
};

export default IntroductionContainer;
