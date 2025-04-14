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
import { IoMdClose } from "react-icons/io";
import CategoryData from './CategoryData';
import json from "../../../../data.json"


const CategoryPanel = ({ openCategoryPanel, handleCategory }) => {

    const [data, setData] = React.useState(json)
    

    const DrawerList = (
        <Box sx={{ width: 350 }} role="presentation" >
            <div className='d-flex justify-content-between px-3 pt-3'>
                <h5 className='fw-bold'>Shop By Categories</h5>
                <IoMdClose className='MdClose' size={30} onClick={handleCategory} />
            </div>
            <hr />
            <div className='px-4'>

                <CategoryData data={data} handleCategory={handleCategory} />
            </div>

        </Box>
    );

    return (
        <div>

            <Drawer open={openCategoryPanel} onClose={handleCategory}>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default React.memo(CategoryPanel);