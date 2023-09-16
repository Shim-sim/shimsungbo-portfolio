import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface SkillProps {
  skill: string;
  explain: string;
}

const Skills = ({ skills }: { skills: SkillProps[] }) => {
  return (
    <div className="bg-[#F1F3F8] desktop:w-[60vw] tablet:w-[90vw] mobile:w-[80vw]">
      <p className="flex items-center gap-x-1 mt-0 text-[24px] font-semibold mobile:text-[20px]">
        <BorderColorOutlinedIcon />
        사용기술들
      </p>
      {skills.map((skill, index) => (
        <Accordion key={`${index + 1}-${skill.skill}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="content"
            id="header"
          >
            <Typography>{skill.skill}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ whiteSpace: 'pre-wrap' }}>{skill.explain}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Skills;
