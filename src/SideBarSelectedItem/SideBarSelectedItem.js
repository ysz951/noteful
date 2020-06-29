import React from 'react';
import './SideBarSelectedItem.css'
function SideBarSelectedItem(props){    
    const {folder} = props
    return (
        <li className="sideBarSelectedItem">
            <p>{folder.name}</p>
        </li>
    );
}

SideBarSelectedItem.defaultProps = {
    folder: {},
};

export default SideBarSelectedItem;
