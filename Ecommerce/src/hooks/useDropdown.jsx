import { useCallback, useEffect, useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";
import { useLocation } from "react-router-dom";

const UseDropdown=()=>{
    
    const [open, setOpen]=useState(false);
  
     const ref=useRef(null)
     const location = useLocation();

     const toggleDropdown=useCallback(()=>setOpen((prev)=> !prev),[])
     const closeDropdown=useCallback(()=>setOpen(false),[])
      
      useOnClickOutside(ref, closeDropdown)
     
  // ✅ Close dropdown when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
    
      return {ref,open, toggleDropdown, closeDropdown}
}

export default UseDropdown;