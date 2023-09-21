import React from 'react';
import Explain from '../../common/Explain';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://github.com/Shim-sim/shimsungbo-prtfolio',
    text: 'GitHub Repository',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'Next.JS',
    explain: EXPLAIN.nextjs,
  },
  {
    skill: 'TypeScript',
    explain: EXPLAIN.typescript,
  },
  {
    skill: 'MUI',
    explain: EXPLAIN.mui,
  },
  {
    skill: 'ESLint',
    explain: EXPLAIN.eslint,
  },
  {
    skill: 'Prettier',
    explain: EXPLAIN.prettier,
  },
  {
    skill: 'Vercel',
    explain: EXPLAIN.vercel,
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        개인 프로젝트
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-8">
          나만의 포트폴리오 개발(현재 페이지)
        </span>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 09월 개발
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>나만의 포트폴리오를 가지기 위해서 개발</Explain>
      </article>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </div>
  );
};

export default Portfolio;
