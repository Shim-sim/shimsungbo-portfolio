import React from 'react';
import LinkIcon from '@material-ui/icons/Link';
import Explain from './Explain';

interface LinkProps {
  text: string;
  href: string;
}
const Links = ({ links }: { links: LinkProps[] }) => {
  return (
    <div className="bg-[#F1F3F8] desktop:w-[60vw] tablet:w-[90vw] mobile:w-[80vw]">
      <p className="flex items-center gap-x-1 mt-0 text-[24px] font-semibold mobile:text-[20px]">
        <LinkIcon />
        관련링크들
      </p>
      <div className="flex flex-col gap-y-[7px]">
        {links.map((link, index) => (
          <Explain key={`${index + 1}-${link.text}`}>
            <a
              href={link.href}
              target="_blank"
              className="bg-gradient-to-r bg-[200%] duration-300 hover:bg-purple-100 hover:to-transparent underline underline-offset-4"
            >
              {link.text}
            </a>
          </Explain>
        ))}
      </div>
    </div>
  );
};

export default Links;
