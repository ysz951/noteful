import React, { Component } from 'react';
import SideBarItem from '../SideBarItem/SideBarItem'

class SideBarList extends Component {
    static defaultProps = {
        folders: []
    };

    render(){
        const {folders} = this.props;
        
        return (
            <div className='sideBarList'>
                <ul className="sideBarList_List">
                    {folders.map((folder, i) => 
                        <SideBarItem key={i} folder={folder}/>)}
                </ul>
               
            </div>
        );
    }
}

export default SideBarList;
