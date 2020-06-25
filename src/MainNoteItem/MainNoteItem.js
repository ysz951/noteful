import React, { Component } from 'react';
import './MainNoteItem.css';
import { Route, Link } from 'react-router-dom';

class MainNoteItem extends Component {
    static defaultProps = {
        deleteNode: () => {},
    };
    
    render(){
        const {note, deleteNote}=this.props;
        
        return (
            <li className="mainNoteItem">
    
                <Link to={`/note/${note.id}`}>
                    <p>{note.name}</p>
                </Link>
                <p>{note.modified}</p>
                <button 
                    onClick={() => deleteNote(note.id)}
                    type='button'
                >
                    delete
                </button>
            </li>
        );
    }
}

export default MainNoteItem;