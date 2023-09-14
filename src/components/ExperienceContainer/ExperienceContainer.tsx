import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import FadeInContent from '@/components/gsap/FadeInContent';
import FadeInHeaderText from '@/components/gsap/FadeInHeaderText';
import FadeInBodyText from '@/components/gsap/FadeInBodyText';
import SkyPoint from '../SkyPoint';

const ExperienceContainer = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <div className="flex relative w-screen bg-[#F1F3F8]">
      {isOver1100px && (
        <div className="sticky top-0 w-[20vw] h-screen">
          <div>테ㅣㅇ블 컨텐츠 정보들</div>
        </div>
      )}
      {/*컨텐츠*/}
      <div className="flex relative w-[80vw] flex-col p-[40px]">
        {/*일 경험 */}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Work<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>여기에는 현재 위니언</FadeInContent>
          <FadeInContent delay={0.3}>과거 축구선수 이력 짧게</FadeInContent>
        </article>

        {/*개인 프로젝트*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Project<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>개인 프로젝트</FadeInContent>
          <FadeInContent delay={0.3}>팀 프로젝트</FadeInContent>
        </article>

        {/*공유 및 스터디*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Share & Study<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>개인노션</FadeInContent>
          <FadeInContent delay={0.3}>새싹ㅅ스터디?</FadeInContent>
        </article>

        {/*오픈소스 및 교육*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              OpenSource Education<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>우테코만 적자</FadeInContent>
          <FadeInContent delay={0.3}>nextjs 오픈소스</FadeInContent>
        </article>

        {/*오픈소스 및 교육*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              OpenSource 🟢 Education<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>우테코만 적자</FadeInContent>
          <FadeInContent delay={0.3}>nextjs 오픈소스</FadeInContent>
        </article>
      </div>
    </div>
  );
};

export default ExperienceContainer;
