import React from 'react';
import './MainNoteItem.css';
import {Link} from 'react-router-dom';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
export default function MainNoteItem(props){
    
    return(
        
        <FolderNoteContext.Consumer>
            {(context) => {
                const {note}=props;
                const {deleteNote} = context
                // console.log(note.modified)
                return (
                    <li className="mainNoteItem">
                        <div className="Note"> 
                            <p className="noteName">
                            <Link to={`/note/${note.id}`}>
                                {note.name}
                            </Link>
                            </p>
                            <br/>
                            <p>{note.modified}</p>
                            
                        </div>
                        <div className="Delete">
                            <button 
                                onClick={() => deleteNote(note.id)}
                                type='button'
                            >   
                                <FontAwesomeIcon className="deleteIcon"icon={faTrashAlt}/>
                                <span> Delete</span>
                            </button>
                        </div>
                    </li>
                );
            }}
        </FolderNoteContext.Consumer>
    )
    
}
MainNoteItem.defaultProps = {
    note: {},
    // deleteNote: () => {},
};
// export default MainNoteItem;
