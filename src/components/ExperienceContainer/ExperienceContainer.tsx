import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import FadeInContent from '@/components/gsap/FadeInContent';
import Wynneien from './contents/works/Wynneien';
import SkyPoint from '../SkyPoint';
import Football from './contents/works/Football';
import Portfolio from './contents/projects/Portfolio';
import WeAre from './contents/projects/WeAre';
import Saessak from './contents/projects/Saessak';
import Notions from './contents/shareStudy/Notions';
import Study from './contents/shareStudy/Study';
import Education from './contents/eduOpenSource/Education';
import OpenSource from './contents/eduOpenSource/OpenSource';
import SidebarContents from '../SidebarContents/SidebarContents';

const ExperienceContainer = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <div className="flex relative w-screen bg-[#F1F3F8]">
      {isOver1100px && (
        <FadeInContent delay={1.3}>
          <div className=" h-[4820px] w-[20.8vw] bg-[#aac8ff]">
            <div className="bg-[#aac8ff] h-full "></div>
          </div>
        </FadeInContent>
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
          <FadeInContent delay={0.3}>
            <Wynneien />
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Football />
          </FadeInContent>
        </article>

        {/*개인 프로젝트*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Project<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Portfolio />
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <WeAre />
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Saessak />
          </FadeInContent>
        </article>

        {/*공유 및 스터디*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Share & Study<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Notions />
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Study />
          </FadeInContent>
        </article>

        {/*오픈소스 및 교육*/}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              OpenSource Education<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <Education />
          </FadeInContent>
          <FadeInContent delay={0.3}>
            <OpenSource />
          </FadeInContent>
        </article>
      </div>
    </div>
  );
};

export default ExperienceContainer;
