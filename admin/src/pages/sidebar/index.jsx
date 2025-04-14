import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import data from "../../../data.json"

const SidebarPage = ({toggle,setToggle,}) => {
  return (
    <div>
        <Sidebar toggle={toggle} setToggle={setToggle} data={data}/>


    </div>
  )
}

export default SidebarPage