import React from "react";
import { useGlobal } from "../context";
// styled components
import { Container } from "../styles/Container.styled";
import { Board } from "../styles/Board.styled";
import { Background } from "../styles/Background.styled";
// components
import Details from "../components/Details";
import ImageText from "../components/ImageText";
import Loader from "./Loader";
import Message from "./Message";

const AppContainer = () => {
  const { stylesVariables, loading, err } = useGlobal();

  if (loading) {
    return <Loader />;
  }

  return (
    <Container stylesVariables={stylesVariables}>
      <Background />

      <Board stylesVariables={stylesVariables}>
        <ImageText />

        <div className="details-back"></div>

        <Details />
      </Board>

      {err && <Message />}
    </Container>
  );
};

export default AppContainer;
