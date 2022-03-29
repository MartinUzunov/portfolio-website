import { useRef } from "react";
import { useState, useEffect } from "react";
import CustomLetter from "../Letter/Letter";
import {
  HomeBody,
  HomeContainer,
  Memoji,
  TypeWritter,
  Button,
  MemojiContainer,
} from "./HomeElements";

const typewritterStrings: string[] = [
  "Software Developer",
  "Data Analyst",
  "Freelancer",
  "Crypto Enthusiast",
];

const Home = () => {
  const letters: JSX.Element[] = [];
  letters.push(
    <span
      key={Math.random().toString()}
      style={{ fontSize: 60, color: "white" }}
    >
      I'm{" "}
    </span>
  );

  /**
   * Add every letter of the name as separate tag.
   */
  const name: string = "Martin \n";
  for (let i = 0; i < name.length; i += 1) {
    if (name[i] === "\n") {
      letters.push(
        <br
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent" }}
        />
      );
    } else if (name[i] === " ") {
      letters.push(
        <span
          key={Math.random().toString()}
          style={{ backgroundColor: "transparent" }}
        >
          &nbsp;
        </span>
      );
    } else {
      letters.push(
        <CustomLetter key={Math.random().toString()}>{name[i]}</CustomLetter>
      );
    }
  }

  const [text, setText] = useState(typewritterStrings[0]);
  const [direction, setDirection] = useState("forward");
  const index = useRef(0);

  /**
   * Changing typing direction every 'timeInterval' milliseconds and changing the word every two changes of direction.
   */
  const timeInterval: number = 3900;
  useEffect(() => {
    const interval = setInterval(() => {
      if (index.current >= typewritterStrings.length) {
        index.current = 0;
      }

      if (direction === "backward") {
        setText(typewritterStrings[index.current]);
      }

      if (direction === "forward") {
        setDirection("backward");
        index.current += 1;
      } else if (direction === "backward") {
        setDirection("forward");
      }
    }, timeInterval);
    return () => {
      clearInterval(interval);
    };
  }, [direction]);

  return (
    <>
      <HomeBody id="home">
        <HomeContainer>
          <span style={{ fontSize: 20, color: "white" }}>Hi There, 👋</span>
          <div>{letters}</div>
          <TypeWritter
            key={Math.random().toString()}
            typing_direction={direction}
          >
            {text}
          </TypeWritter>
          <Button to="contact" spy={true} smooth={true} offset={-79}>
            Hire Me
          </Button>
        </HomeContainer>
        <MemojiContainer>
          <Memoji />
        </MemojiContainer>
      </HomeBody>
    </>
  );
};

export default Home;
