import React from 'react';
import './sideBarItem.css'
import {Link } from 'react-router-dom';

export default function SideBarItem(props){
    const {folder} = props
    return (
        <li className="sideBarItem">
            <p>
            <Link to={`/folder/${folder.id}`}>
                {folder.name}
            </Link>
            </p>
            
        </li>
    );
    
}

SideBarItem.defaultProps={
    folder: {},
}

