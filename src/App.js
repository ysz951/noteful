import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import MainContent from './MainContent/MainContent';
import FolderNoteContext from './FolderNoteContext';
import ComponentError from './ComponentError';
// import STORY from './dummy-story';
import { format } from 'date-fns'
class App extends Component {
  state = {
    folders: [],
    notes: [],
    error: null,
  }
  handleAddFolder = folder => {
    this.setState({
      folders: [ ...this.state.folders, folder],
    })
  }

  addNote = note => {
    this.setState({
      notes:[...this.state.notes, note]
    })
  }

  deleteNote = noteId => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
      })
      .catch(error => {
        // console.error(error)
        this.setState({ error })
      })
    const newNotes = this.state.notes.filter(note => note.id !== noteId);
    this.setState({
      notes: newNotes,
    })

  }
  // setFolders = folders => {
  //   this.setState({
  //     folders,
  //     error: null,
  //   })
  // }
  // setNotes = notes => {
  //   // notes.forEach(note => {
  //   //   // console.log(typeof new Date(note.modified.slice(0,10)))
  //   //   // if (note.modified[0] === '2') note.modified = new Date(note.modified.slice(0,10))
  //   //   note.modified = note.modified.slice(0,10)
  //   // });
  //   this.setState({
  //     notes,
  //     error: null,
  //   })
  // }
  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/notes'),
      fetch('http://localhost:9090/folders'),
    ])
    .then(([notesRes, foldersRes]) => {
      if (!notesRes.ok)
        return notesRes.json().then(e => Promise.reject(e))
      if (!foldersRes.ok)
        return foldersRes.json().then(e => Promise.reject(e))

      return Promise.all([
        notesRes.json(),
        foldersRes.json(),
      ])
    })
    .then(([notes, folders]) => {
      this.setState({ 
        notes, 
        folders,
        error: null, 
      })
    })
    .catch(error => {
      alert("Something went wrong, please try again later.")
      this.setState({ error })
    })
    // fetch('http://localhost:9090/folders')
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error('Something went wrong, please try again later.')
    //     }
    //     return res.json()
    //   })
    //   .then(this.setFolders)
    //   .catch(error => {
    //     this.setState({error: error.message});
    //   })
    // fetch('http://localhost:9090/notes')
    //   .then(res => {
    //     if (!res.ok) {
    //       throw new Error('Something went wrong, please try again later.')
    //     }
    //     return res.json()
    //   })
    //   .then(this.setNotes)
    //   .catch(error => this.setState({error: error.message}))
  }


  render(){
    
    // const {folders,notes} = this.state;
    // console.log(STORY);
    // console.log(this.state.error)
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      handleAddFolder: this.handleAddFolder,
      addNote: this.addNote,
    }
    return (
      
      <div className='App'>
        {/* {this.state.error ? <h2 className="errorMessage" role="alert">Your form could not be submitted because of 3 validation errors.</h2> : ""} */}
        <div className='Home'>
        <h1>
            <Link to={`/`}>
                Noteful
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
