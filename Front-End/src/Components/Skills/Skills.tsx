import { StyledHeading } from "../About/AboutElements";
import RotatingSphere from "../RotatingSphere/RotatingSphere";
import { SkillsBody, SkillsContainer, Text } from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsBody id="skills">
        <SkillsContainer>
          <StyledHeading>Skills</StyledHeading>
          <Text>
            I have been coding for 4 years and I have learned to code in C++,
            Python, Java, Typescript, version control with Git, and database
            management with MySQL. I possess strong knowledge in Data
            Structures, Algorithms, and OOP principles. I can set up and manage
            a Windows OS, Linux OS, and Mac OS.
            <br />
            <br />I have taken multiple university courses and have base
            knowledge with different programming languages like C, Haskell, Racket, and
            Prolog. I also have taken and certified many Coursera courses which
            you can check in my&nbsp;
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/martin-uzunov/"
            >
              LinkedIn
            </a>{" "}
            profile.
          </Text>
        </SkillsContainer>
        <SkillsContainer justify="center">
          <RotatingSphere />
        </SkillsContainer>
      </SkillsBody>
    </>
  );
};

export default Skills;
