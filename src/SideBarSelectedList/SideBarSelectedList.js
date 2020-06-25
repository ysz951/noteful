import React, { Component } from 'react';
import SideBarSelectedItem from '../SideBarSelectedItem/SideBarSelectedItem'

class SideBarSelectedList extends Component {
    static defaultProps = {
    };

    render(){
        const {folder} = this.props;
        return (
            <div className='mainNoteList'>
                <ul>
                <SideBarSelectedItem folder={folder}/>
                </ul>
                {/* <ul>
                    <MainNoteItem key={i} note={note} deleteNote={deleteNote}/>)
                </ul>
                <p>123</p>
                 */}
            </div>
        );
    }
}

export default SideBarSelectedList;
