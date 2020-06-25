import React, { Component } from 'react';
import MainNoteList from '../MainNoteList/MainNoteList'

class MainNote extends Component {
    static defaultProps = {
        
    };

    render(){
        const {notes, currentFolder} = this.props;
        return (
            <div className='mainNote'>
                <MainNoteList notes={notes} currentFolder={currentFolder}/>
                <p>Add note</p>
            </div>
        );
    }
}

export default MainNote;
