import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const myHeader = useRef(null);

  useEffect(() => {
    gsap.to(myHeader.current, {
      opacity: 0,
      duration: 3,
    });
  }, []);

  return (
    <main
      ref={myHeader}
      className="flex h-screen w-screen justify-center items-center bg-[#333333]"
    >
      kkkk123
    </main>
  );
};

export default Home;
