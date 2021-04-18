import React from "react";
import {
  Main,
  Card,
  Text,
  Details,
  LinkWrapper,
  LinkContainer,
  Link,
  Image,
} from "./components";
import cat from "./peeking-cat.png";

function App() {
  const textArray = [
    "laughing at cat memes",
    "building awesome things",
    "watching a movie",
    "sleeping",
  ];
  return (
    <Main>
      <Card>
        <Text fontSize="1.7em">Rishabh Rao</Text>
        <Text fontSize="2.5em">I do stuff</Text>
        <Text fontSize="1em" marginBot="20px">
          (Mostly frontend development)
        </Text>
        <Text fontSize="0.85em">
          {`Right now, I'm probably ${
            textArray[Math.floor(Math.random() * textArray.length)]
          }`}
        </Text>
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
          <Image src={cat} alt="cat" />
        </Details>
      </Card>
    </Main>
  );
}

export default App;
