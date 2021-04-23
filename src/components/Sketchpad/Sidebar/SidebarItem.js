import React, { useState } from 'react';
import { Popover } from '@material-ui/core';
import ServiceMenu from './ServiceMenu';

const SidebarItem = ({ service, icon, triggers, actions }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const idPopover = open ? 'simple-popover' : undefined;

    return (
        <>
        
        <div className="dndnode" onClick={handleClick}>
            {icon}
        </div>

        <Popover
            id={idPopover}
            className="service-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            marginThreshold={40}
        >
            <ServiceMenu service={service} triggers={triggers} actions={actions} close={handleClose} />
        </Popover>

        </>
    );
};

export default SidebarItem;