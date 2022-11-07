import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey I am Dharaj Shetty
          <br />
          But you can call me Shetty
        </SectionTitle>
        <SectionText>
          I am a Web Designer, front-end & back-end Web Developer
        </SectionText>
        <Button onClick={() => window.location }>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
