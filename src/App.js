import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
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
      
      <main className='App'>
        <HomePage />
        <MainContent
              notes={notes} folders={folders} deleteNote={this.deleteNote}
        />
        {/* <MainContent notes={notes} folders={folders} currentFolder={folders[0].id}/> */}
      </main>
    );
  }
}

export default App;
