import React, { Component } from 'react';
import './MainNoteItem.css';
import {Link} from 'react-router-dom';

class MainNoteItem extends Component {
    static defaultProps = {
        deleteNode: () => {},
    };
    
    render(){
        const {note, deleteNote}=this.props;
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
}

export default MainNoteItem;
