import React, { Component } from 'react';
import './MainNoteItem.css';
import {Link} from 'react-router-dom';

export default function MainNoteItem(props){

        const {note, deleteNote}=props;
        return (
            <li className="mainNoteItem">
                <div className="Note"> 
                    <p className="noteName">
                    <Link to={`/note/${note.id}`}>
                        {note.name}
                    </Link>
                    </p>
                    <p>{note.modified}</p>
                    
                </div>
                <div className="Delete">
                    <button 
                        onClick={() => deleteNote(note.id)}
                        type='button'
                    >
                        delete
                    </button>
                </div>
            </li>
        );
    
}
MainNoteItem.defaultProps = {
    note: {},
    deleteNote: () => {},
};
// export default MainNoteItem;
