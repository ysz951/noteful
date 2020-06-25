import React, { Component } from 'react';
import SideBarList from '../SideBarList/SideBarList'

class SideBar extends Component {
    static defaultProps = {
        
    };

    render(){
        const {folders} = this.props;
        return (
            <div className='sideBar'>
                <SideBarList folders={folders}/>
                <p>Add folder</p>
            </div>
        );
    }
}

export default SideBar;
