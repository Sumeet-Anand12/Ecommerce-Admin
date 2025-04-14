import  {  createContext, useContext, useEffect, useState } from "react";




const myContext= createContext();


export const GlobalContext=({children})=>{
    const [width, setWidth]=useState(0)
 
    useEffect(()=>{
        setWidth(window.innerWidth)


    },[])

    return(
        <myContext.Provider value={{width, setWidth}}>
          {children}
        </myContext.Provider>
    )
}

export const useWidth=()=>useContext(myContext)