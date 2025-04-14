import React from 'react'
import { styled } from '@mui/material/styles';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';




const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const ToolTip = ({title, children}) => {
    return (
        <div>
            <LightTooltip
                title={title}
                placement="left">
                     <div>  
                        {children}                                        
                     </div>
            </LightTooltip >

        </div>
    )
}

export default ToolTip