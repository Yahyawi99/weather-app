import React from "react";
import Provider from "./context";
// styled components
import { Container } from "./styles/Container.styled";
import { Board } from "./styles/Board.styled";

function App() {
  return (
    <Provider>
      <Container>
        <Board></Board>
      </Container>
    </Provider>
  );
}

export default App;
