import React, { Component } from 'react';
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarSelectedItem from '../SideBarSelectedItem/SideBarSelectedItem'
class SideBarList extends Component {
    static defaultProps = {
        folders: []
    };

    render(){
        const {folders, folderId} = this.props;
        
        return (
            <div className='sideBarList'>
                <ul className="sideBarList_List">
                    {folders.map((folder, i) => 
                        folder.id === folderId ? <SideBarSelectedItem key={i} folder={folder}/> : <SideBarItem key={i} folder={folder}/>)
                    }
                </ul>
               
            </div>
        );
    }
}

export default SideBarList;
