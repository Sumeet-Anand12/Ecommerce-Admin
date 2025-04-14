import  {  createContext, useContext, useState } from "react";




const myContext= createContext();


export const GlobalContext=({children})=>{
  const [toggle, setToggle]=useState(true);


    return(
        <myContext.Provider value={{toggle, setToggle}}>
          {children}
        </myContext.Provider>
    )
}

export const useToggle=()=>useContext(myContext)