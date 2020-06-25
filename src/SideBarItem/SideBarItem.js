import React, { Component } from 'react';
import './sideBarItem.css'

class SideBarItem extends Component {
    static defaultProps = {
        
    };

    render(){
        const {folder} = this.props
        return (
            <li className="sideBarItem">
                <p>{folder.name}</p>
            </li>
        );
    }
}

export default SideBarItem;
