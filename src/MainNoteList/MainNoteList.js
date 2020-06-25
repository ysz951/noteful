import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'

class MainNoteList extends Component {
    static defaultProps = {
    };

    render(){
        const {notes, currentFolder} = this.props;
        const currentNote = notes.filter((note) => note.folderId === currentFolder)
        return (
            <div className='mainNoteList'>
                <ul>
                    {currentNote.map((note,i) => <MainNoteItem key={i} note={note}/>)}
                </ul>
                
            </div>
        );
    }
}

export default MainNoteList;
