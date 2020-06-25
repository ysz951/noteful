import React, { Component } from 'react';
import SideBarList from '../SideBarList/SideBarList'

class SideBar extends Component {
    static defaultProps = {
        
    };

    render(){
        const {folders, folderId} = this.props;
        return (
            <div className='sideBar'>
                <SideBarList folders={folders} folderId={folderId}/>
                <p>Add folder</p>
            </div>
        );
    }
}

export default SideBar;
