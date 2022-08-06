import React from "react";
import { useGlobal } from "../context";
// styled components
import { Container } from "../styles/Container.styled";
import { Board } from "../styles/Board.styled";
import { Background } from "../styles/Background.styled";
// components
import Details from "../components/Details";
import ImageText from "../components/ImageText";

const AppContainer = () => {
  const { stylesVariables } = useGlobal();

  return (
    <Container stylesVariables={stylesVariables}>
      <Background />

      <Board>
        <ImageText />

        <Details />
      </Board>
    </Container>
  );
};

export default AppContainer;
