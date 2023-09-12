import React from 'react';
import Image from 'next/image';
import FadeInContent from '@/components/gsap/FadeInContent';
import FadeInHeaderText from '@/components/gsap/FadeInHeaderText';
import Underline from '@/components/gsap/Underline';
import FadeInBodyText from '@/components/gsap/FadeInBodyText';
import SkyPoint from '../SkyPoint';

const IntroductionContainer = () => {
  return (
    <section className="flex flex-row relative h-screen w-screen bg-[#202224] text-white tablet:flex-col">
      <FadeInContent delay={1}>
        {/*사이드 바*/}
        <aside className="flex flex-col justify-between items-center w-[20vw] h-full tablet:w-screen tablet:h-full tablet:gap-y-[20px]">
          <div className="flex relative flex-col justify-center mt-[57px] gap-y-[15px] tablet:gap-y-[5px]">
            <a className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent">
              GitHub<SkyPoint>.</SkyPoint>
            </a>
            <a className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent">
              LinkedIn<SkyPoint>.</SkyPoint>
            </a>
            <a className="w-full font-semibold font-Pretendard cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-indigo-500 duration-700 hover:bg-sky-500 hover:to-transparent">
              Notion<SkyPoint>.</SkyPoint>
            </a>
          </div>

          {/*바텀 컨테이너 */}
          <div className="flex mb-[100px] flex-col justify-center items-center">
            <a className=" no-underline text-white text-[16px] hover:text-gray-400">
              shimdb96@gamil.com
            </a>
            <p className="text-white ml-3">Last update: 2023.09.11</p>
          </div>
        </aside>
      </FadeInContent>

      {/* 메인 */}
      <article className="flex relative flex-col justify-center items-center w-[80vw] h-full tablet:w-screen tablet:h-[200vh] mobile:w-screen mobile:h-[200vh]">
        <FadeInHeaderText delay={1.5}>
          <span className=" text-[50px] tablet:text-[40px] mobile:text-[28px]">
            기록과 공유를 좋아하는
          </span>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <span className="text-[85px] tablet:text-[70px] mobile:text-[38px]">
            <Underline color="red" delay={2.4}>
              심성보
            </Underline>
          </span>
          <span className=" text-[50px] tablet:text-[40px] mobile:text-[28px]">
            입니다.
          </span>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <div className="flex flex-col justify-center items-center">
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              프론트엔드 개발자입니다.
            </span>
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              기술을 공유하고 문서화하는것을 좋아합니다.
            </span>
            <span className="text-[30px] tablet:text-[23px] mobile:text-[14px]">
              공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.
            </span>
          </div>
        </FadeInBodyText>
        <div>
          <div className="fixed left-[20%] top-0 opacity-50 w-screen tablet:absolute target:left-0">
            <img
              className="w-[80vw] h-screen object-cover tablet:w-screen mobile:w-screen"
              src="sungbo.jpeg"
              alt="background-image"
            />
          </div>
        </div>
        {/*여기에 Arrow button 추가 */}
      </article>
    </section>
  );
};

export default IntroductionContainer;
