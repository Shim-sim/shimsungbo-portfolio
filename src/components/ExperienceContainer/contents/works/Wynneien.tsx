import React from 'react';
import Explain from '../../common/Explain';
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

const Wynneien = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        재직
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <a className="bg-[200%] duration-300 bg-gradient-to-r from-purple-200 hover:bg-sky-300 hover:to-transparent underline underline-offset-8">
          위니언
        </a>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 02월 07일 - (재직중)
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>사내 차트시스템의 리뉴얼을 담당하는 프론트엔드팀 소속</Explain>
        <Explain>노후화 된 사내차트시스템 리뉴얼 프로젝트 진행</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Wynneien;
