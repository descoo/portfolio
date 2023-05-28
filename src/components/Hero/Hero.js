import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { BtnLinkItem } from "../Footer/FooterStyles";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Skhumbuzo More's <br />
          Portfolio
        </SectionTitle>
        <SectionText>Full stack developer.</SectionText>
        <Button>
          <BtnLinkItem href="mailto:moreskhumbuzo@gmail.com">
            Get In Touch
          </BtnLinkItem>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
