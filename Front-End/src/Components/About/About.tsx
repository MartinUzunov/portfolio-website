import photoOfMe from "./../../Assets/me.png";
import {
  AboutBody,
  AboutContainer,
  StyledHeading,
  Photo,
  TextSection,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutBody id="about">
        <AboutContainer>
          <StyledHeading>Who I Am?</StyledHeading>
          <TextSection>
            I am a Software Developer and a student at Sofia University with a
            major in Computer Science, located in Bulgaria.
            <br />
            <br />
            Currently, I'm working as a Data Analyst for the world’s largest
            business transaction company - Tungsten Network. I also have one
            year of experience working on freelance projects including Web
            Scraping, Automation, Data Analytics, and Web Development.
            <br />
            <br />I am passionate about solving technical problems, researching
            and developing new software and technologies. I undertake and
            challenge myself to always improve, by being proactive, diligent,
            responsible, and committed to finding the perfect solution to any
            problem.
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photoOfMe} />
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;
