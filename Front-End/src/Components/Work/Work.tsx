import Project from "../Project/Project";
import { WorkBody, WorkContainer } from "./WorkElements";
import { StyledHeading } from "../About/AboutElements";
import AlgorithmVisualization from "./../../Assets/AlgorithmVisualization.mp4";
import Sudoku from "./../../Assets/Sudoku.mp4";
import Minesweeper from "./../../Assets/Minesweeper.mp4";
import Discord from "./../../Assets/Discord.mp4";

const Work = () => {
  const discordTechnologies: string[] = [
    "Java",
    "JavaFX",
    "RichTextFX",
    "IntelliJ IDEA",
    "MySQL",
    "Object Oriented Design",
    "Client-Server",
  ];

  const algorithmVisualizationTechnologies: string[] = [
    "Python",
    "PyGame",
    "Breadth-First Search",
    "A-Star",
  ];

  const sudokuTechnologies: string[] = [
    "Java",
    "JavaFX",
    "IntelliJ IDEA",
    "Object Oriented Design",
    "Remote Method Invocation",
  ];

  const minesweeperTechnologies: string[] = [
    "Python",
    "PyGame",
    "Object Oriented Design",
    "VS Code",
  ];

  return (
    <>
      <WorkBody id="work">
        <WorkContainer style={{ alignSelf: "flex-start" }}>
          <StyledHeading>Some things I've Built</StyledHeading>
        </WorkContainer>
        <div style={{ height: 40 }}></div>
        <Project
          invertedOrientation={false}
          projectName="Discord Clone"
          projectDescription="Fully functional Discord clone implemented in Java with the help of the JavaFX library. The application implements the Client-Server model and is using MySQL as a database. The user can create an account or log in if an account already exists, add other users as friends, create groups, invite users to the group, add categories and channels to the groups, send personal and group messages, change personal and group profile photos, block users,  change his activity status and see friends activity status. "
          video={Discord}
          stackItems={discordTechnologies}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="Algorithm Visualizer"
          projectDescription="Algorithm visualization illustrates how algorithms work in a graphical way. It's aims is to simplify and deepen the understanding of algorithms operation. Currently two algortihms are implemented: Breadth First Search and A-Star. The application allows the user to draw 'walls', set starting and ending point and reset the board."
          video={AlgorithmVisualization}
          stackItems={algorithmVisualizationTechnologies}
        ></Project>
        <Project
          invertedOrientation={false}
          projectName="Sudoku"
          projectDescription="The classic Sudoku game implemented in Java with the help of the JavaFX library. The application implements the Remote Method Invocation model. The user can use both the mouse and the keyboard for input, choose difficulty level, take notes, undo and redo moves and request a solution to the puzzle from the server. "
          video={Sudoku}
          stackItems={sudokuTechnologies}
        ></Project>
        <Project
          invertedOrientation={true}
          projectName="Minesweeper"
          projectDescription="The Windows XP version of the Minesweeper implemnted with PyGame. The mines are randomly placed and then the whole board is filled with unflipped blocks. The user can reset the board at any time by pressing the emoji button."
          video={Minesweeper}
          stackItems={minesweeperTechnologies}
        ></Project>
        <h1 style={{ color: "white", paddingBottom: "1.2em" }}>
          You can check more of my work in&nbsp;
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/MartinUzunov"
          >
            Github
          </a>
        </h1>
      </WorkBody>
    </>
  );
};

export default Work;
