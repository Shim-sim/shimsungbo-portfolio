import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TextProps {
  children?: ReactNode;
  delay: number;
}

const FadeInHeaderText = ({ children, delay }: TextProps) => {
  const target = useRef(null);

  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      top: '-10%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'linear',
    });
  }, [delay]);

  return (
    <p className="font-Pretendard relative z-[5] tracking-[2px]" ref={target}>
      {children}
    </p>
  );
};

export default FadeInHeaderText;
