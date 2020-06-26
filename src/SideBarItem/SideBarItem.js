import React, { Component } from 'react';
import './sideBarItem.css'
import {Link } from 'react-router-dom';
class SideBarItem extends Component {
    static defaultProps = {
        folder: {},
    };

    render(){
        const {folder} = this.props
        return (
            <li className="sideBarItem">
                
                <Link to={`/folder/${folder.id}`}>
                    <p>{folder.name}</p>
                </Link>
                
            </li>
        );
    }
}

export default SideBarItem;
