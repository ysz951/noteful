import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import MainContent from './MainContent/MainContent';
import FolderNoteContext from './FolderNoteContext';
// import STORY from './dummy-story';

class App extends Component {
  state = {
    folders: [],
    notes: [],
    error: null,
  }
  deleteNote = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes,
    })

  }
  setFolders = folders => {
    this.setState({
      folders,
      error: null,
    })
  }
  setNotes = notes => {
    this.setState({
      notes,
      error: null,
    })
  }
  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => {
        this.setState({error: error.message});
      })
    fetch('http://localhost:9090/notes')
      .then(res => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return res.json()
      })
      .then(this.setNotes)
      .catch(error => this.setState({error: error.message}))
  }


  render(){
    
    const {folders,notes} = this.state;
    // console.log(STORY);
    // console.log(this.state.error)
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
    }
    return (
      
      <div className='App'>
        <div className='Home'>
        <h1>
            <Link to={`/`}>
                Home
            </Link>
            </h1>
        </div>
        <FolderNoteContext.Provider value={contextValue}>
          <MainContent
              deleteNote={this.deleteNote}
          />
        </FolderNoteContext.Provider>
        {/* <MainContent
              notes={notes} folders={folders} deleteNote={this.deleteNote}
        /> */}
      </div>
    );
  }
}

export default App;
