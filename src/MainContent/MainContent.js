import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import MainNote from '../MainNote/MainNote'
import './MainContent.css'
class MainContent extends Component {
    static defaultProps = {
        
    };
    
    render(){
        const {folders, notes, currentFolder} = this.props;
        
        return (
            <div className='mainContent'>
                <SideBar folders={folders}/>
                <MainNote notes={notes} currentFolder={currentFolder}/>
            </div>
        );
    }
}

export default MainContent;
