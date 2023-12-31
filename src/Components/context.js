import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [rem, setremo] = useState(0)
  const [page, seTPage] = useState(1);
  const [blogcount, seTblogcount] = useState(6);

  const [data, SetData] = useState();
  const [load, setLoad] = useState(false);
  const [filterdata, setFilterData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(
      res => {
        // console.log(res);
        SetData(res);
        setFilterData(res?.filter(item =>
          item.id > blogcount - 6 && item.id <= blogcount)
        );
        setLoad(true);
      }
    ).then(
      filterdata?.map((item) => {
        console.log(item.id);
      })
    )
    setFilterData(filterdata?.filter(item =>
      item.id !== rem
    ))

  }, [blogcount])
 
  return <AppContext.Provider value={{ data, page, seTPage, blogcount, seTblogcount, filterdata, setFilterData, setLoad, SetData, load, setremo }} >
    {children}
  </AppContext.Provider>
};
const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };