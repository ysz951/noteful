import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SideBarList.css'
import {Link } from 'react-router-dom';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class SideBarList extends Component {
    static defaultProps = {
        history: {},
        folderId: "",
    };
    static propTypes ={
        folderId: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
        history: PropTypes.shape({
            push: PropTypes.func,
          }).isRequired,
    }
    static contextType = FolderNoteContext;
    render(){
        const {folderId, history} = this.props;
        const {folders} = this.context;
        return (
            <nav className="sideBar mainContentLeft">
                <ul className="sideBarList">
                    {folders.map((folder, i) =>  folder.id === Number(folderId) ? 
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
                <button className="addFolder" type="button" onClick={() => history.push("/add-folder")}>
                    <FontAwesomeIcon className="addFolderIcon"icon={faPlus}/>
                    <br/>
                    <span>Folder</span>
                </button>
                
            </nav>
        );
    }
}

export default SideBarList;
