import React, { Component } from 'react';
import './SideBarList.css'
import {Link } from 'react-router-dom';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class SideBarList extends Component {
    static defaultProps = {

    };
    
    static contextType = FolderNoteContext;
    render(){
        const {folderId, history} = this.props;
        const {folders} = this.context;
        // folders.toUpperCase()
        // const folders = 1;
        return (
            <nav className="sideBar mainContentLeft">
                <ul className="sideBarList">
                    {folders.map((folder, i) =>  folder.id === folderId ? 
                        <li key = {i} className="sideBarSelectedItem">
                            <p>{folder.name}</p>
                        </li> :
                        <li key = {i} className="sideBarItem">
                            <p>
                            <Link to={`/folder/${folder.id}`}>
                                {folder.name}
                            </Link>
                            </p>
                        </li>
                    )
                    }
                </ul>
                {/* <FontAwesomeIcon className = "black" icon={faPlusSquare }/> */}
                <button className="addFolder" type="button" onClick={() => history.push("/add-folder")}>
                    <FontAwesomeIcon className="addFolderIcon"icon={faPlus }/>
                    <br/>
                    <span>Folder</span>
                </button>
                
            </nav>
        );
    }
}

export default SideBarList;
