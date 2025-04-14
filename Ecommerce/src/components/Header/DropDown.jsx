import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CategoryData from '../home/sidebarPanel/CategoryData';
import json from '../../../data.json'
import { IoMdClose } from "react-icons/io";

const DropDown = ({state, handleDrawer }) => {
    const [data, setData] = React.useState(json)
   
   

    const DrawerList = (anchor) => (
        // console.log(anchor ==='top','anchor'),
        <Box sx={{ width: anchor === 'top' &&  "100%" }} role="presentation"
            // onClick={()=>handleDrawer(anchor, false)}
            onKeyDown={handleDrawer}
        >
            <div className='d-flex justify-content-between px-3 pt-3'>
                <h5 className='fw-bold'>Shop By Categories</h5>
                <IoMdClose className='MdClose' size={30} onClick={handleDrawer} />
            </div>
            <hr />
            <div className='px-4'>

                <CategoryData data={data} handleDrawer={handleDrawer} />
            </div>

        </Box>
    );
    return (
        <div>

            <Drawer 
            
             anchor="top" 
             open={state}
             onClose={ handleDrawer}
            sx={{
                '.MuiDrawer-paper': {
                  top: '170px', // Custom top positioning
                  width: '38%',
                  left:'380px', // Custom width
                   borderRadius:"8px", // Custom background color
                   height:"350px",
                   overflowY: 'auto'
                },
            }}
           
            >
                {DrawerList('top')}
            </Drawer>
        </div>
    )
}

export default DropDown