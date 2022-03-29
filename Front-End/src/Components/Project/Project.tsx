import {
  Description,
  DescriptionSide,
  ProjectBody,
  ProjectName,
  TechStack,
  TechStackItem,
  VideoHolder,
  Video,
} from "./ProjectElements";

interface ProjectProps {
  invertedOrientation: boolean;
  projectName: string;
  projectDescription: string;
  video: string;
  stackItems: string[];
}

const Project = (props: ProjectProps) => {
  const techStackItems: JSX.Element[] = [];

  for (const s of props.stackItems) {
    techStackItems.push(<TechStackItem key={Math.random()}>{s}</TechStackItem>);
  }

  if (props.invertedOrientation === true) {
    return (
      <>
        <ProjectBody>
          <VideoHolder>
            <Video
              src={props.video}
              muted
              loop={true}
              onMouseEnter={(e: any) => e.target.play()}
              onMouseOut={(e: any) => e.target.pause()}
            ></Video>
          </VideoHolder>
          <DescriptionSide inversed={true}>
            <ProjectName inversed={true}>{props.projectName}</ProjectName>
            <Description>{props.projectDescription}</Description>
            <TechStack>{techStackItems}</TechStack>
          </DescriptionSide>
        </ProjectBody>
      </>
    );
  } else {
    return (
      <>
        <ProjectBody>
          <DescriptionSide inversed={false}>
            <ProjectName inversed={false}>{props.projectName}</ProjectName>
            <Description>{props.projectDescription}</Description>
            <TechStack>{techStackItems}</TechStack>
          </DescriptionSide>
          <VideoHolder>
            <Video
              src={props.video}
              muted
              loop={true}
              onMouseEnter={(e: any) => e.target.play()}
              onMouseOut={(e: any) => e.target.pause()}
            ></Video>
          </VideoHolder>
        </ProjectBody>
      </>
    );
  }
};

export default Project;
