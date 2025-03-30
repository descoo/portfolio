import React from "react";
import { DiFirebase, DiReact, DiAndroid, DiAsterisk } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      My experience spans a diverse range of technologies, enabling me to build
      solutions across mobile, web, and back-end environments.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiAsterisk size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools & Technologies:</ListTitle>
          <ListParagraph>
            - Git: Proficient <br />
            - RESTful APIs: Proficient <br />- GraphQL: Familiar
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            - React: Proficient <br />
            - Angular: Proficient <br />
            - Next.js: Experienced <br />
            - Flutter: Proficient <br />
            - HTML/CSS: Proficient <br />- JavaScript/JQuey/TypeScript:
            Proficient
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End & Databases</ListTitle>
          <ListParagraph>
            - Node.js: Experienced <br />
            - Ruby on Rails: Proficient <br />
            - Flask: Experienced <br />
            - Express.js: Experienced <br />
            - FireStore: Experienced <br />
            - PostgreSQL: Proficient <br />
            - MongoDB: Familiar <br />
            - MySQL: Experienced <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            - React Native: Experienced <br />- Flutter: Proficient
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
