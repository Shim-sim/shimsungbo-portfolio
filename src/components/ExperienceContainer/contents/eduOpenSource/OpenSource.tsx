import React from 'react';
import Explain from '../../common/Explain';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';
import Links from '../../common/Links';
import Image from 'next/image';
import NextJs from 'public/nextjs.jpeg';

const OpenSource = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        번역
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <Image
          width={100}
          style={{ border: '1px solid', borderRadius: '50%' }}
          src={NextJs}
          alt="Nextjs Docs"
        />
        NextJs Docs
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 01월 - 진행중
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>NextJs 공식문서 간단한 페이지 번역</Explain>
      </article>
    </div>
  );
};

export default OpenSource;
