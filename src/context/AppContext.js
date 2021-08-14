import React from "react";

import useInitialState from "../hooks/useInitialState";

const AppContext = React.createContext({});

export const AppContextProvider = ({ children }) => {
  const initialState = useInitialState();
  const isEmty = Object.keys(initialState.state).length;
  return (
    <>
      {isEmty > 0 ? (
        <AppContext.Provider value={initialState}>
          {children}
        </AppContext.Provider>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default AppContext;
