import React, { Component } from 'react';
import './SideBarList.css'
import SideBarItem from '../SideBarItem/SideBarItem'
import SideBarSelectedItem from '../SideBarSelectedItem/SideBarSelectedItem'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
class SideBarList extends Component {
    static defaultProps = {

    };
    static contextType = FolderNoteContext;
    render(){
        const {folderId} = this.props;
        const {folders} = this.context
        return (
            <nav className='sideBar'>
                <ul className="sideBarList">
                    {folders.map((folder, i) => 
                        folder.id === folderId ? 
                        <SideBarSelectedItem key={i} folder={folder}/> : 
                        <SideBarItem key={i} folder={folder}/>
                    )
                    }
                </ul>
                {/* <FontAwesomeIcon className = "black" icon={faPlusSquare }/> */}
                <button className="addFolder" type='button'>
                    <FontAwesomeIcon className="addFolderIcon"icon={faPlus }/>
                    <br/>
                    <span>Folder</span>
                </button>
                
            </nav>
        );
    }
}

export default SideBarList;
