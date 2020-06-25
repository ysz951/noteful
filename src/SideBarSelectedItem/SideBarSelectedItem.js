import React, { Component } from 'react';
import './SideBarSelectedItem.css'
import { Route, Link } from 'react-router-dom';
class SideBarSelectedItem extends Component {
    static defaultProps = {
        
    };

    render(){
        const {folder} = this.props
        return (
            <li className="sideBarSelectedItem">
                {/* <Link to={`/folder/${folder.id}`}> */}
                <p>{folder.name}</p>
                {/* </Link> */}
            </li>
        );
    }
}

export default SideBarSelectedItem;
