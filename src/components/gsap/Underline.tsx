import gsap from 'gsap';
import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './Underline.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Color {
  color: string;
}

interface UnderlineProps {
  children?: ReactNode;
  delay: number;
  color: string;
}

const Underline = ({ delay, children, color }: UnderlineProps) => {
  const target = useRef(null);

  useEffect(() => {
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      backgroundImage: `linear-gradient(transparent 80%, ${color} 20%)`,
      backgroundSize: '100% 100%',
      delay,
      duration: 0.6,
      ease: 'expo.out',
    });
  }, [delay, color]);

  return (
    <span
      className={cx(
        `bg-gradient-to-r from-transparent underline decoration-yellow-500 via-transparent to-${color} bg-repeat bg-[length:0%_100%] z-[-1]`
      )}
      color={color}
      ref={target}
    >
      {children}
    </span>
  );
};

export default Underline;
