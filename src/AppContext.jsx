import React, { createContext, useReducer } from "react";
import { counterReducer, data } from "./reducer/counterReducer";

export const AppContext = createContext();//function to create a context object

export const AppProvider = ({ children }) => {
  //wrapping
  const [apiData, dispatch] = useReducer(counterReducer, data);
  return (
    <AppContext.Provider value={{ apiData, dispatch }}>
        { children }
    </AppContext.Provider>
  );
};
// children=>Dashboard
//1 AppContext
//2 AppProvider

//page 1