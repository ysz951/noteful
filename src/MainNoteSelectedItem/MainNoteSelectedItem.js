import React, { Component } from 'react';
// import './MainNoteSelectedItem.css';


class MainNoteSelectedItem extends Component {
    static defaultProps = {
        deleteNode: () => {},
    };
    
    render(){
        const {note, deleteNote}=this.props;
        
        return (
            <li className="mainNoteItem">
    

                <p>{note.name}</p>

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

export default MainNoteSelectedItem;
