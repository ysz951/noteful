import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'

class MainNoteList extends Component {
    static defaultProps = {
    };

    render(){
        const {notes, folderId, deleteNote} = this.props;
        return (
                <ul className='mainNoteList'>
                    {notes.map((note,i) => folderId ? 
                        note.folderId === folderId ? 
                        <MainNoteItem key={i} note={note} deleteNote={deleteNote}/> : 
                        "" : 
                        <MainNoteItem key={i} note={note} deleteNote={deleteNote}/>)}
                </ul>
                

        );
    }
}

export default MainNoteList;
