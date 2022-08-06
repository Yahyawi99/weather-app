import React from "react";
import Provider from "./context";
// components
import AppContainer from "./components/Container";

function App() {
  return (
    <Provider>
      <AppContainer />
    </Provider>
  );
}

export default App;
