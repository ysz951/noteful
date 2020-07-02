import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'
import './MainNoteList.css'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
class MainNoteList extends Component {
    static defaultProps = {
        
    };
    static contextType = FolderNoteContext;
    render(){
        const {folderId, history} = this.props;
        const {notes} = this.context;
        return (
            <main className="mainNote mainContentRight">
                <ul className="mainNoteList">
                    {notes.map((note,i) => folderId ? 
                        note.folderId === folderId ? 
                        <MainNoteItem key={i} note={note}/> : 
                        "" : 
                        <MainNoteItem key={i} note={note}/>)}
                </ul>
                <button className="addNote" type="button" onClick={() => history.push("/add-note")}>
                    <FontAwesomeIcon className="addNoteIcon"icon={faPlus }/>
                    <br/>
                    <span>Note</span>
                </button>
            </main>
        );
    }
}

export default MainNoteList;
