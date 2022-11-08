import React from "react";
import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  IconContainer,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  PicturePadding,
  TechContainer,
} from "./TechStyles";

const Tech = () => {
  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From Back-end To Design
      </SectionText>
      <List>
        <ListItem>
          <IconContainer>
            <PicturePadding>
              <SiReact size="3rem" color="cyan" />
            </PicturePadding>
            <PicturePadding>
              <SiNextdotjs size="3rem" />
            </PicturePadding>
            <picture>
              <SiTailwindcss size="3rem" color="cyan" />
            </picture>
          </IconContainer>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experiece with <br />
              React.js & NextJs
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <PicturePadding>
            <SiExpress size="3rem" />
          </PicturePadding>
          <picture>
            <SiMongodb size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <SiFigma size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
};

export default Tech;
