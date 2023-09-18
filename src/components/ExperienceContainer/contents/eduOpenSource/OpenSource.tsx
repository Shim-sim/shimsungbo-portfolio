import React from 'react';
import Explain from '../../common/Explain';
import EXPLAIN from '../../explains';
import Skills from '../../common/Skills';
import Links from '../../common/Links';
import Image from 'next/image';
import NextJs from 'public/nextjs.jpeg';
import Mergeed from 'public/Merged.png';
import CheckIcon from '@material-ui/icons/Check';
import Link from 'next/link';

const OpenSource = () => {
  return (
    <div className="flex flex-col gap-y-[25px] w-[900px] bg-[#F1F3F8] desktop:w-[900px] tablet:w-[80vw] mobile:w-[80vw] mobile:gab-y-[15px]">
      <span className="text-[24px] mt-12 mobile:text-[20px] font-medium font-Pretendard">
        번역
      </span>
      <h2
        className="flex items-center text-[40px] gap-x-5 m-0 font-semibold mobile:text-[32px]"
        id="Nextjs-docs"
      >
        <Image
          width={100}
          style={{ border: '1px solid', borderRadius: '10%' }}
          src={NextJs}
          alt="Nextjs Docs"
        />
        NextJs Docs
      </h2>

      <article className="flex flex-col gap-y-[7]">
        <div className="flex itesm-center text-[20px] mobile:text-[16px]">
          <CheckIcon className="mr-[10px] text-sky-500" />
          <Image
            className="w-[90px] mr-3 rounded-[20px] object-cover mobile:w-[80px]"
            alt="Merged"
            src={Mergeed}
          />
          <div className="flex items-center justify-center w-[130px] h-[30px] font-semibold font-Pretendard rounded-md bg-[#facd17] text-[17px] text-white mobile:text-[12px] mobile:w-[110px] mobile:h-[26px]">
            2023-09-11
          </div>
        </div>
        <Explain>
          <Link
            href={'https://github.com/Nextjs-kr/Nextjs.kr/pull/327'}
            className="font-semibold font-Pretendard cursor-pointer underline underline-offset-4 duration-300 hover:bg-sky-300 hover:to-transparent"
            target={'_blank'}
          >
            Merge된 Pull request링크
          </Link>
        </Explain>
        <Explain>NextJs 공식문서 간단한 페이지 번역</Explain>
      </article>
    </div>
  );
};

export default OpenSource;
