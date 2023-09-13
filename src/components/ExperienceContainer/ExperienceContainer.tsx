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
      <div className="flex w-[80vw] flex-col p-[40px]">
        {/*경험 */}
        <article className="flex w-full flex-col gay-y-[70px] mt-[50px] mb-[100px] mobile:gap-y-[55px]">
          <FadeInContent delay={0.3}>
            <h1 className="experience_title">
              Work<SkyPoint>.</SkyPoint>
            </h1>
            <div className="divide_line"></div>
          </FadeInContent>
        </article>
      </div>
    </div>
  );
};

export default ExperienceContainer;
