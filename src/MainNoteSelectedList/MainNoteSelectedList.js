import React, { Component } from 'react';
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'

class MainNoteSelectedList extends Component {
    static defaultProps = {
    };

    render(){
        const {note} = this.props;
 
        return (
            <div className='mainNote'>
                <ul className='mainNoteList'>
                <li className="mainNoteItem">
    

                <p>{note.name}</p>

                <p>{note.modified}</p>
                </li>
                    <li>{note.content}</li>
                </ul>
            </div>
        );
    }
}

export default MainNoteSelectedList;
