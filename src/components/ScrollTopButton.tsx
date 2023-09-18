import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import React, { useCallback } from 'react';

const ScrollTopButton = () => {
  const scrollToTop = useCallback(
    () => window.scroll({ top: 0, behavior: 'smooth' }),
    []
  );
  return (
    <button
      className="fixed right-[68px] bottom-0 w-[60px] h-[60px] bg-[#E1E4EC] rounded-3xl border-none transition ease-in transiton duration-300 m-[25px] z-50 hover:cursor-pointer hover:bg-[#c7c7c7]"
      onClick={scrollToTop}
    >
      <ArrowUpwardIcon fontSize="large" />
    </button>
  );
};

export default ScrollTopButton;
