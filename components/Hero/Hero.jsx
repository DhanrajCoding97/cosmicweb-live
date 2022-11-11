import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { BsWhatsapp } from "react-icons/bs";
import { LeftSection, WhatsappButton } from "./HeroStyles";
import { motion } from "framer-motion";

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

        <WhatsappButton href="https://wa.me/918454994241">
          Connect Now
          <BsWhatsapp size={25} color="green" />
        </WhatsappButton>
      </LeftSection>
    </Section>
  );
};

export default Hero;
