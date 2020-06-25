import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import MainNote from '../MainNote/MainNote';
import MainNoteSelectedList from '../MainNoteSelectedList/MainNoteSelectedList';
import './MainContent.css';
import { Route, Link } from 'react-router-dom';
import SideBarSelectedList from '../SideBarSelectedList/SideBarSelectedList';
class MainContent extends Component {
    static defaultProps = {
        
    };
    
    render(){
        const {folders, notes, deleteNote} = this.props;
        return (
            <div className='mainContent'>
                <>
                <Route
                    exact
                    path='/'
                    render={(routerProps) =>
                        {
                        // console.log(routerProps.match.params);
                        return <SideBar folders={folders} />
                    }
                    }
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        {
                        return <SideBar folders={folders} folderId={routerProps.match.params.folderId}/>
                    }
                    }
                />
                <Route
                    path='/note/:noteId'
                    render={(routerProps) =>
                        {
                        const note= notes.find(item => item.id === routerProps.match.params.noteId);
                        const folder = folders.find(item => item.id === note.folderId);
                        
                        return <SideBarSelectedList folder={folder}  history={routerProps.history}/>
                    }
                    }
                />
                </>

                <>
                <Route
                    exact
                    path='/'
                    render={(routerProps) =>
                        <MainNote notes={notes} deleteNote={deleteNote}/>
                    }
                />
                <Route
                    path='/folder/:folderId'
                    render={(routerProps) =>
                        <MainNote notes={notes} folderId={routerProps.match.params.folderId} deleteNote={deleteNote}/>
                    }
                />
                <Route
                    path='/note/:noteId'
                    render={(routerProps) =>{
                        
                        // console.log(routerProps.match.params.noteId)
                        return <MainNoteSelectedList note={notes.find(item => item.id === routerProps.match.params.noteId)}/>}
                    }
                />
                    {/* <Route path='/folder/:folderId' component={FooNote} />
                    <Route path='/note/:noteId' component={FooNote} /> */}
                </>
                {/* <SideBar folders={folders}/>
                <MainNote notes={notes}/> */}
            </div>
        );
    }
}

export default MainContent;
