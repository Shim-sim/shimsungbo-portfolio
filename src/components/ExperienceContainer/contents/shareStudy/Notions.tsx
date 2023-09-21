import React from 'react';
import Explain from '../../common/Explain';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://www.notion.so/shimsungbo/ecb1ac8e72064f0d916a492842109371?pvs=4',
    text: '노션 개발기록',
  },
];

const Notions = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        블로그 (노션)
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-4">
          노션 블로그
        </span>
      </h2>
      <article className="flex flex-col gap-y-[7]">
        <Explain>프론트, 알고리즘, CS지식 공부 내용, 회고록 등등 정리</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Notions;
