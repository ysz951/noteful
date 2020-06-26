import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import MainContent from './MainContent/MainContent';
import STORY from './dummy-story';

class App extends Component {
  state = {
    folders: STORY.folders,
    notes: STORY.notes,
  }
  deleteNote = (noteId) => {
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes,
    })

  }
  render(){
    
    const {folders,notes} = this.state;
    // console.log(STORY);
    return (
      
      <div className='App'>
        <div className='Home'>
        <h1>
            <Link to={`/`}>
                Home
            </Link>
            </h1>
        </div>
        <MainContent
              notes={notes} folders={folders} deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
