import React from "react";
import Provider from "./context";
// styled components
import { Container } from "./styles/Container.styled";
import { Board } from "./styles/Board.styled";
import { Background } from "./styles/Background.styled";

function App() {
  return (
    <Provider>
      <Container>
        <Background></Background>

        <Board>
          <div className="image">
            <p>16°</p>
          </div>
        </Board>
      </Container>
    </Provider>
  );
}

export default App;
