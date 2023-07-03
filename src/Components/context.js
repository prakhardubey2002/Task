import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [page,seTPage]=useState(1);
  const [blogcount,seTblogcount]=useState(6);
  

  return <AppContext.Provider value={{ page,seTPage,blogcount,seTblogcount }} >{children}</AppContext.Provider>
};
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };