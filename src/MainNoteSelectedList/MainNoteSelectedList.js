import React, { Component } from 'react';
import './MainNoteSelectedList.css'
// import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'

class MainNoteSelectedList extends Component {
    static defaultProps = {
        note: {},
    };

    render(){
        const {note} = this.props;
 
        return (
            <main className='mainNote'>
                <ul className='mainNoteList'>
                    {/* <MainNoteSelectedItem note={note}/> */}
                    <li className="mainNoteItem">
                        <div className="Note">
                            <p className="noteName">{note.name}</p>
                            <p>{note.modified}</p>
                        </div>
                        
                    </li>
                    <li className="NoteContent">{note.content}</li>
                </ul>
            </main>
        );
    }
}

export default MainNoteSelectedList;
