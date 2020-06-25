import React, { Component } from 'react';
import './MainNoteItem.css'

class MainNoteItem extends Component {
    static defaultProps = {
        
    };

    render(){
        const {note}=this.props
        return (
            <li className="mainNoteItem">
                <p>{note.name}</p>
            </li>
        );
    }
}

export default MainNoteItem;
