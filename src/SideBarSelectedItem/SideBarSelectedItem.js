import React, { Component } from 'react';
import './SideBarSelectedItem.css'
class SideBarSelectedItem extends Component {
    static defaultProps = {
        folder: {},
    };

    render(){
        const {folder} = this.props
        return (
            <li className="sideBarSelectedItem">
                <p>{folder.name}</p>
            </li>
        );
    }
}

export default SideBarSelectedItem;
