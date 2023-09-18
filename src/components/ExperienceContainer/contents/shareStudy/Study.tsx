import React from 'react';
import Explain from '../../common/Explain';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://www.notion.so/shimsungbo/e06791c2fa6948a4b297dae9b806235a?pvs=4',
    text: '새싹스터디',
  },
];

const Study = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        스터디
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <a className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-4">
          프론트엔드 스터디
        </a>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 01월 - 진행중
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>팀플 포트폴리오를 가지기 위해서 개발</Explain>
        <Explain>지금까지의 공부내용 정리</Explain>
        <Explain>템플릿 정리 및 공유</Explain>
        <Explain>템플릿 정리 및 공유</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Study;
