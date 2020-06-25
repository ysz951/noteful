import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import MainContent from './MainContent/MainContent'
import STORY from './dummy-story'
class App extends Component {
  render(){
    
    const {folders,notes} = STORY;
    console.log(STORY)
    return (
      <main className='App'>
        <HomePage />
        <MainContent notes={notes} folders={folders} currentFolder={folders[0].id}/>
      </main>
    );
  }
}

export default App;
