import React, { Component } from 'react';
// import './MainNoteSelectedItem.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function MainNoteSelectedItem(props){

        const {note, deleteNote, goBack}=props;
        // console.log(onClickCancel)
        return (
            <li className="mainNoteItem">
                <div className="Note"> 
                    <p className="noteName">
                        {note.name}
                    </p>
                    <p>{note.modified}</p>
                    
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
                        delete
                    </button>
                </div>
            </li>
        );
    
}
MainNoteSelectedItem.defaultProps = {
    note: {},
    deleteNote: () => {},
};

export default MainNoteSelectedItem;
