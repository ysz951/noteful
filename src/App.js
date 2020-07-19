import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './App.css';
import MainContent from './MainContent/MainContent';
import FolderNoteContext from './FolderNoteContext';
import config from './config';

class App extends Component {
  state = {
    folders: [],
    notes: [],
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
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Bearer 80d28d84-9be5-421f-9188-df9da5c49d36'
      },
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
      })
      .then(res => {
        const newNotes = this.state.notes.filter(note => note.id !== noteId);
        this.setState({
          notes: newNotes,
        })
      })
      .catch(error => {
        alert("Something went wrong, please try again later.")
        return
      })
      
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`, {
        headers: new Headers({'Authorization': 'Bearer 80d28d84-9be5-421f-9188-df9da5c49d36'})
      }),
      fetch(`${config.API_ENDPOINT}/folders`, {
        headers: new Headers({'Authorization': 'Bearer 80d28d84-9be5-421f-9188-df9da5c49d36'})
      }),
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
      notes.forEach(note => note.modified = note.modified.slice(0,10));
      this.setState({ 
        notes, 
        folders,
      })
    })
    .catch(error => {
      alert("Something went wrong, please try again later.")
    })
  }


  render(){

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      handleAddFolder: this.handleAddFolder,
      addNote: this.addNote,
    }
    return (
      
      <div className='App'>
        <div className='Home'>
        <h1>
            <Link to={`/`}>
                Noteful
            </Link>
            </h1>
        </div>
        <FolderNoteContext.Provider value={contextValue}>
          <MainContent />
        </FolderNoteContext.Provider>
      </div>
    );
  }
}

export default App;
