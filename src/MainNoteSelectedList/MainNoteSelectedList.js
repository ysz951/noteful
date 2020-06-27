import React, { Component } from 'react';
import './MainNoteSelectedList.css'
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'
import { withRouter } from 'react-router-dom';
class MainNoteSelectedList extends Component {
    static defaultProps = {
        note: {},
    };
    
    // state = {
    //     class: "mainNote"
    // }

    goBack = () => {
        this.props.history.push('/');
    }

    render(){
        const {note, deleteNote, history} = this.props;
       
        return (
            <main className="mainNote white">
                <ul className='mainNoteList'>
                    <MainNoteSelectedItem note={note} deleteNote={deleteNote} goBack={this.goBack}/>
                    {/* <MainNoteSelectedItem note={note}/> */}
                    {/* <li className="mainNoteItem">
                        <div className="Note">
                            <p className="noteName">{note.name}</p>
                            <p>{note.modified}</p>
                        </div>
                        
                    </li> */}
                    <li className="NoteContent">{note.content}</li>
                </ul>
                {/* <button type="button" onClick={() => {
                    this.setState({class: this.state.class + " " + "white"})}}
                    >change color</button> */}
            </main>
        );
    }
}

export default MainNoteSelectedList;
