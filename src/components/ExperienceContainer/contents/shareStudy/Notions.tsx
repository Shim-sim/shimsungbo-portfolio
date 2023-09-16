import React from 'react';
import Explain from '../../common/Explain';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://github.com',
    text: '위니언 일지',
  },
  {
    href: 'https://github.com',
    text: '우선 하드코딩',
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
    skill: 'styled-components',
    explain: EXPLAIN.styledComponents,
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

const Notions = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        블로그 (노션)
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <a className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent">
          노션 블로그
        </a>
      </h2>
      <article className="flex flex-col gap-y-[7]">
        <Explain>팀플 포트폴리오를 가지기 위해서 개발</Explain>
        <Explain>템플릿 정리 및 공유</Explain>
        <Explain>템플릿 정리 및 공유</Explain>
        <Explain>템플릿 정리 및 공유</Explain>
      </article>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </div>
  );
};

export default Notions;
