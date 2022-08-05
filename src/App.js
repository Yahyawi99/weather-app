import React from "react";
import Provider from "./context";
// styled components
import { Container } from "./styles/Container.styled";
import { Board } from "./styles/Board.styled";
import { Background } from "./styles/Background.styled";
// components
import Details from "./components/Details";
import ImageText from "./components/ImageText";

function App() {
  return (
    <Provider>
      <Container>
        <Background />

        <Board>
          <ImageText />

          <Details />
        </Board>
      </Container>
    </Provider>
  );
}

export default App;
