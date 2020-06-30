import React from 'react';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns'
function MainNoteSelectedItem(props){
    const {note, goBack}=props;
        return(
            <FolderNoteContext.Consumer>
                {(context) => {
                    const {deleteNote} = context
                    return (
                        <li className="mainNoteItem">
                            <div className="Note"> 
                                <p className="noteName">
                                    {note.name}
                                </p>
                                <br/>
                                <p>Modified <span>&ensp;</span> <span>{note.modified}</span></p> 
                                {/* <p>{format(note.modified, 'Do MMM YYYY')}</p> */}
                                
                            </div>
                            <div className="Delete">
                                <button 
                                    // onClick = {goBack}
                                    // onClick = {() => goBack(item)}
                                    onClick={() => {
                                        goBack();
                                        deleteNote(note.id);
                                    }}
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
MainNoteSelectedItem.defaultProps = {
    note: {},
    goBack: () => {},
};

export default MainNoteSelectedItem;
