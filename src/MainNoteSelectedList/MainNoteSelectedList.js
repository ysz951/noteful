import React, { Component } from 'react';
import './MainNoteSelectedList.css'
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'

class MainNoteSelectedList extends Component {
    static defaultProps = {
        note: {},
    };
    
    // state = {
    //     class: "mainNote"
    // }

    goBack = () => {
        this.props.history.goBack();
        // this.props.history.push('/');
    }

    render(){
        const {note} = this.props;
       
        return (
            <main className="mainNote mainContentRight">
                <ul className='mainNoteList'>
                    <MainNoteSelectedItem note={note} goBack={this.goBack}/>
                    <li className="NoteContent">{note.content}</li>
                </ul>
            </main>
        );
    }
}

export default MainNoteSelectedList;
