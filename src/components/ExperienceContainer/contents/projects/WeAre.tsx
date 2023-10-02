import React from 'react';
import Explain from '../../common/Explain';
import Links from '../../common/Links';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';

const LINKS = [
  {
    href: 'https://github.com/Shim-sim/WE_ARE',
    text: 'GitHub Repository',
  },
];

const WeAre = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        개인 프로젝트
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-4">
          WE ARE
        </span>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2022년 07월 현역으로 복무중 개발한 익명앱 플랫폼
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>복무중인 부대내의 익명제보를 위한 개발</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default WeAre;
