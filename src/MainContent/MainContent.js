import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import SideBarList from '../SideBarList/SideBarList';
import SideBarSelectedList from '../SideBarSelectedList/SideBarSelectedList';
import MainNoteList from '../MainNoteList/MainNoteList';
import MainNoteSelectedList from '../MainNoteSelectedList/MainNoteSelectedList';
import FolderNoteContext from '../FolderNoteContext';
import './MainContent.css';


class MainContent extends Component {
    static defaultProps = {

    };
    
    static contextType = FolderNoteContext;
    render(){
        
        const {folders, notes} = this.context;
        return (
            <div className='mainContent'>
                <Route
                    exact
                    path='/'
                    render={() => <SideBarList />}
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        <SideBarList folderId={routerProps.match.params.folderId}/>
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
                    render={() => <MainNoteList />}
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        <MainNoteList folderId={routerProps.match.params.folderId}/>
                    }
                />
                <Route
                    path='/note/:noteId'
                    render={(routerProps) => 
                        <MainNoteSelectedList 
                            note={notes.find(item => item.id === routerProps.match.params.noteId)} 
                            history={routerProps.history}
                        />
                    }
                />
            </div>
        );
    }
}

export default MainContent;
