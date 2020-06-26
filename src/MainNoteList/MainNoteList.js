import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'
import './MainNoteList.css'

class MainNoteList extends Component {
    static defaultProps = {
        notes: [],
    };

    render(){
        const {notes, folderId, deleteNote} = this.props;
        return (
            <main className='mainNote'>
                <ul className='mainNoteList'>
                    {notes.map((note,i) => folderId ? 
                        note.folderId === folderId ? 
                        <MainNoteItem key={i} note={note} deleteNote={deleteNote}/> : 
                        "" : 
                        <MainNoteItem key={i} note={note} deleteNote={deleteNote}/>)}
                </ul>
                <button className="addNote">Add note</button>
            </main>
        );
    }
}

export default MainNoteList;
