import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { StatelessAccordion as Accordion, Panel } from "baseui/accordion";

const ExperienceAccordion = (props) => {
  const [expanded, setExpanded] = React.useState([
    props?.sections?.[0]?.["title"],
  ]);

  return (
    <div className="experience-accord">
      <Accordion
        expanded={expanded}
        onChange={({ key, expanded }) => {
          console.log(key);
          setExpanded(expanded);
        }}
      >
        {props.sections.map((section, index) => {
          return (
            <Panel
              className="accord-panel"
              title={section["title"]}
              key={section["title"]}
            >
              {section["experiences"].map((experience) => {
                return (
                  <ExperienceCard experience={experience} theme={props.theme} />
                );
              })}
            </Panel>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExperienceAccordion;
