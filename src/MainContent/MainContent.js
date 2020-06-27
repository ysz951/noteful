import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import SideBarList from '../SideBarList/SideBarList';
import SideBarSelectedList from '../SideBarSelectedList/SideBarSelectedList';
import MainNoteList from '../MainNoteList/MainNoteList';
import MainNoteSelectedList from '../MainNoteSelectedList/MainNoteSelectedList';
import './MainContent.css';


class MainContent extends Component {
    static defaultProps = {
        notes: [],
        folders: [],
    };
    

    render(){
        const {folders, notes, deleteNote} = this.props;
        return (
            <div className='mainContent'>
                
                <Route
                    exact
                    path='/'
                    render={() =>
                        <SideBarList folders={folders} />
                    }
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        <SideBarList folders={folders} folderId={routerProps.match.params.folderId}/>
                    }
                />
                <Route
                    path='/note/:noteId'
                    render={(routerProps) =>
                        {
                        const note= notes.find(item => item.id === routerProps.match.params.noteId) || {};
                        const folder = folders.find(item => item.id === note.folderId) || {};
                        return <SideBarSelectedList folder={folder}  history={routerProps.history}/>
                    }
                    }
                />
                
                <Route
                    exact
                    path='/'
                    render={() =>
                        <MainNoteList notes={notes} deleteNote={deleteNote}/>
                    }
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        <MainNoteList notes={notes} folderId={routerProps.match.params.folderId} deleteNote={deleteNote}/>
                    }
                />
                <Route
                    path='/note/:noteId'
                    render={(routerProps) => 
                        <MainNoteSelectedList note={notes.find(item => item.id === routerProps.match.params.noteId)} deleteNote={deleteNote} history={routerProps.history}/>
                    }
                />
            </div>
        );
    }
}

export default MainContent;
