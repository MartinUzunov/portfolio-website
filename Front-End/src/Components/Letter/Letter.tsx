import { useState } from "react";
import { CustomLetter } from "./LetterElements";

function Letter(props: any) {
  const [animation, setAnimation] = useState(false);

  return (
    <>
      <CustomLetter
        animated={animation}
        onMouseEnter={() => {
          setAnimation(true);
        }}
        onTransitionEnd={() => setAnimation(false)}
      >
        {props.children}
      </CustomLetter>
    </>
  );
}

export default Letter;
