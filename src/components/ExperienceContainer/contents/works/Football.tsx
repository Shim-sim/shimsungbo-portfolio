import React from 'react';
import Explain from '../../common/Explain';

const Football = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        전 축구선수
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-8">
          축구
        </span>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        지난 14년간 축구선수로 활동했습니다.
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>2019 체코 FC Graffin Vlašim</Explain>
        <Explain>2019 충주시민축구단</Explain>
      </article>
    </div>
  );
};

export default Football;
