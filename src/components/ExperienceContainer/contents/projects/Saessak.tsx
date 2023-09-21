import React from 'react';
import Explain from '../../common/Explain';
import Links from '../../common/Links';

const LINKS = [
  {
    href: 'https://github.com/saessak-study/saessak-chat-front',
    text: 'GitHub Repository',
  },
];

const Saessak = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        팀 프로젝트
      </span>
      <h2 className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]">
        <span className="bg-gradient-to-r from-indigo-500 duration-500 hover:bg-sky-500 hover:to-transparent underline underline-offset-8">
          Saessak-Chat-Project
        </span>
      </h2>
      <article className="flex flex-col gap-y-[7]">
        <Explain>
          React.js, Sass, Axios, SockJS, SWR 를 활용하여 회원가입, 로그인 및 양방향 통신을
          통한 채팅앱을 구현 한 팀 프로젝트
        </Explain>
        <Explain>현재 접속한 유저의 실시간 접속상태 개발</Explain>
        <Explain>SockJs를 활용한 실시간 채팅 개발</Explain>
      </article>
      <Links links={LINKS} />
    </div>
  );
};

export default Saessak;
