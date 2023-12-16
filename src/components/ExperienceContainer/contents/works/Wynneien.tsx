import React from 'react';
import Explain from '../../common/Explain';
import Links from '../../common/Links';
const LINKS = [
  {
    href: 'https://shimsungbo.notion.site/81f6e6dcad56471b8081566c04ea6027?pvs=4',
    text: '경력 기술서',
  },
];

const Wynneien = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        재직
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-8">
          위니언
        </span>
      </h2>
      <span className="text-[18px] font-semibold mobile:text-[16px]">
        2023년 02월 07일 - (재직중)
      </span>
      <article className="flex flex-col gap-y-[7]">
        <Explain>위니언, FrontEnd Developer | 프론트엔드 개발자 2023.02 ~ 재직</Explain>
        <Explain>차트프로그램 웹 개발, 알파 오픈</Explain>
        <span className="ml-10 text-gray-500  font-Pretendard font-bold mobile:text-[16px]">
          {`-> 레거시 프로그램 → Next.js 리뉴얼`}
        </span>
        <Explain>한국전자인증 공동인증서 인증 기능 개발</Explain>
        <Explain>상용 GRID 프레임워크(AUIGRID)에서 Excel.js로 전환</Explain>
        <Explain>AWS의 EC2, S3, CodeDeploy를 사용한 정적 배포 구성</Explain>
        <span className="ml-10 text-gray-500  font-Pretendard font-bold mobile:text-[16px]">
          {`-> GitHub Action을 기반으로 CI/CD 구성`}
        </span>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Wynneien;
