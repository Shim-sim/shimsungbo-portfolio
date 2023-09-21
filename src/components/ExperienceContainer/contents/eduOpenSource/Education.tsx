import React from 'react';
import Explain from '../../common/Explain';

const Education = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        교육
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-4">
          우아한테크코스 5기
        </span>
      </h2>

      <article className="flex flex-col gap-y-[7]">
        <Explain>우아한형제들에서 주최</Explain>
        <Explain>서류 합격후 2022/10/26 ~ 2022/12/17 프리코스 진행</Explain>
        <Explain>최종에서 아쉽게 불합격</Explain>
      </article>
    </div>
  );
};

export default Education;
