import React from 'react';
import FadeInContent from '@/components/gsap/FadeInContent';

const IntroductionContainer = () => {
  return (
    <section className="flex flex-row relative h-screen w-screen bg-[#202224] text-white tablet:flex-col">
      <FadeInContent delay={1}>
        <aside className="flex flex-col justify-between items-center w-[20vw] h-full tablet:w-screen tablet:h-full tablet:gap-y-[20px]">
          <div className="flex relative flex-col justify-center mt-[57px] gap-y-[15px] tablet:gap-y-[5px]">
            <a className="w-full cursor-pointer h-full text-3xl text-left p-2.5 bg-gradient-to-r from-transparent to-yellow-300 bg-clip-text bg-size-200% transition-transform duration-250 hover:bg-yellow-300 hover:to-transparent">
              내 링크 텍스트
            </a>
          </div>
        </aside>
      </FadeInContent>
    </section>
  );
};

export default IntroductionContainer;
