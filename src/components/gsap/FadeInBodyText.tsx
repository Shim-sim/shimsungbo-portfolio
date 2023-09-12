import gsap from 'gsap';
import React, { ReactNode, useEffect, useRef } from 'react';

interface TextProps {
  children?: ReactNode;
  delay: number;
}

const FadeInBodyText = ({ children, delay }: TextProps) => {
  const target = useRef(null);

  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);

  return (
    <div className=" relative font-Pretendard text-white z-[5]" ref={target}>
      {children}
    </div>
  );
};

export default FadeInBodyText;
