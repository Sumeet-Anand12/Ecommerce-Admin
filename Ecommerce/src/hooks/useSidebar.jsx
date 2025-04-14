import { useCallback, useEffect, useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";
import { useLocation } from "react-router-dom";

const useSidebar=()=>{
    
    const [isOpenSidebar, setIsOpenSidebar]=useState(false);
  
     const ref=useRef()
     const location = useLocation();

     const toggleSidebar=useCallback(()=>setIsOpenSidebar((prev)=> !prev),[])
     const closeSidebar=useCallback(()=>setIsOpenSidebar(false),[])
      
      useOnClickOutside(ref, closeSidebar)
     
  // ✅ Close dropdown when route changes
  useEffect(() => {
    setIsOpenSidebar(false);
  }, [location.pathname]);
    console.log(isOpenSidebar, "sidebar")
      return {isOpenSidebar, toggleSidebar,ref, closeSidebar}
}

export default useSidebar;