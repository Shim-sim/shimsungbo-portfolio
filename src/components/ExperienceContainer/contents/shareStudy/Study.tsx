import React from 'react';
import Explain from '../../common/Explain';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://www.notion.so/shimsungbo/e06791c2fa6948a4b297dae9b806235a?pvs=4',
    text: '새싹스터디 링크',
  },
];

const Study = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        스터디
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-4">
          프론트엔드 스터디
        </span>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 01월 - 진행중
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>프론트엔드 로드맵을 기준으로 정해진 주제에 대해서 조사하고 발표</Explain>
        <Explain>취업 전 부터 시작하여, 현재까지 활발하게 진행되고 있는 스터디</Explain>
        <Explain>참여인원 4명</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Study;
