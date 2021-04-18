/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useResizeDetector } from "react-resize-detector";
import {
  Main,
  Card,
  Text,
  Details,
  LinkWrapper,
  LinkContainer,
  Link,
  Image,
  ImageFlipped,
} from "./components";
import cat from "./peeking-cat-min.png";
import catFlip from "./peeking-cat-flip-min.png";

function App() {
  const { height: cardHeight, ref: cardRef } = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 500,
  });

  const [top, setTop] = useState(0);
  const [flip, setFlip] = useState(false);
  const [disableClick, setDisableClick] = useState(false);
  const [show, setShow] = useState(true);

  const textArray = [
    "laughing at cat memes",
    "laughing at cat memes",
    "building awesome things",
    "building awesome things",
    "building awesome things",
    "watching a movie",
    "sleeping",
  ];
  const [randomText] = useState(
    `Right now, I'm probably ${
      textArray[Math.floor(Math.random() * textArray.length)]
    }`
  );

  const getRandomTop = () => {
    const min = 0;
    const max = Math.floor(cardHeight - 112);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const setRandomImageprops = () => {
    if (!disableClick) {
      setDisableClick(true);
      const top = getRandomTop();
      handleShow();
      setTimeout(() => {
        setFlip((flip) => !flip);
        setTop(top);
        handleShow();
        setDisableClick(false);
      }, 4000);
    }
  };

  const handleShow = () => {
    setShow((show) => !show);
  };

  return (
    <Main>
      <Card ref={cardRef}>
        <Text fontSize={"1.7em"}>Rishabh Rao</Text>
        <Text fontSize={"2.5em"}>I do stuff</Text>
        <Text fontSize={"1em"} marginBot={"20px"}>
          (Mostly frontend development)
        </Text>
        <Text fontSize={"0.85em"}>{randomText}</Text>
        <Details>
          <LinkWrapper>
            <LinkContainer>
              <Link href="https://www.linkedin.com/in/rishabhrao/">
                linkedin
              </Link>
            </LinkContainer>
            <LinkContainer>
              <Link href="https://github.com/rishabhr16">github</Link>
            </LinkContainer>
          </LinkWrapper>
          <Image
            src={cat}
            alt="cat"
            top={top}
            flip={flip}
            show={show}
            pointer={!disableClick}
            onClick={setRandomImageprops}
          />
          <ImageFlipped
            src={catFlip}
            alt="cat"
            top={top}
            flip={flip}
            show={show}
            pointer={!disableClick}
            onClick={setRandomImageprops}
          />
        </Details>
      </Card>
    </Main>
  );
}

export default App;
