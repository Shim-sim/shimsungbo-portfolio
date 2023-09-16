import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

const Explain = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <CheckIcon className="mr-[10px] text-sky-500" />
      <div className="text-[20px] font-Pretendard font-medium mobile:text-[16px]">
        {children}
      </div>
    </div>
  );
};

export default Explain;
