import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Div1>
        <Link href="/" legacyBehavior>
          <a
            style={{
              display: "flex",
              alignment: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Cosmic Web</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" legacyBehavior>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" legacyBehavior>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" legacyBehavior>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
