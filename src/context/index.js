import React, { useContext } from "react";

const AppContext = React.createContext();
const Provider = ({ children }) => {
  return <AppContext.Provider value={"hi"}>{children}</AppContext.Provider>;
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export default Provider;
