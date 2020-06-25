import React, { Component } from 'react';
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'

class MainNoteSelectedList extends Component {
    static defaultProps = {
    };

    render(){
        const {note} = this.props;
        return (
            <ul className='mainNoteList'>
                <MainNoteSelectedItem note={note}/>
                <li>{note.content}</li>
            </ul>
        );
    }
}

export default MainNoteSelectedList;
