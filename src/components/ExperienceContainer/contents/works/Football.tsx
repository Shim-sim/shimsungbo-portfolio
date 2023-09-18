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

const Football = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        전 축구선수
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <a className="bg-[200%] duration-300 bg-gradient-to-r from-purple-200 hover:bg-sky-300 hover:to-transparent underline underline-offset-8">
          축구
        </a>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        14년간 축구생활
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>Tnt</Explain>
        <Explain>할렐루야</Explain>
        <Explain>충주</Explain>
        <Explain>체코</Explain>
      </article>
    </div>
  );
};

export default Football;
