import React, { Component } from 'react';
import MainNoteList from '../MainNoteList/MainNoteList'

class MainNote extends Component {
    static defaultProps = {
        
    };

    render(){
        const {notes, folderId, deleteNote} = this.props;
        return (
            <div className='mainNote'>
                <MainNoteList notes={notes} folderId={folderId} deleteNote={deleteNote}/>
                <p>Add note</p>
            </div>
        );
    }
}

export default MainNote;
