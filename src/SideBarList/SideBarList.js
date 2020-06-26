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
            <nav className='sideBar'>
                <ul className="sideBarList">
                    {folders.map((folder, i) => 
                        folder.id === folderId ? <SideBarSelectedItem key={i} folder={folder}/> : <SideBarItem key={i} folder={folder}/>)
                    }
                </ul>
                <button className="addFolder">Add folder</button>
            </nav>
        );
    }
}

export default SideBarList;
