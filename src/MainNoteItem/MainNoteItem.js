import React from 'react';
import './MainNoteItem.css';
import {Link} from 'react-router-dom';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
export default function MainNoteItem(props){
    
    return(
        
        <FolderNoteContext.Consumer>
            {(context) => {
                const {note}=props;
                const {deleteNote} = context
                // console.log(note.modified.slice(0,10))

                return (
                    <li className="mainNoteItem">
                        <div className="Note"> 
                            <h2 className="noteName">
                            <Link to={`/note/${note.id}`}>
                                {note.name}
                            </Link>
                            </h2>
                            <br/>
                            <p>Modified <span>&ensp;</span> <span>{note.modified}</span></p> 
                            {/* <p>{format(date, 'Do MMM YYYY')}</p> */}
                            
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
