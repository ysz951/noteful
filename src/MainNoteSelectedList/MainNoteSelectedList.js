import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainNoteSelectedList.css'
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'

class MainNoteSelectedList extends Component {
    static defaultProps = {
        note: {},
        history: {},
    };
    static propTypes ={
        history: PropTypes.shape({
            goBack: PropTypes.func,
        }).isRequired,
        note: PropTypes.shape({
            content: PropTypes.string,
        }).isRequired,
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {note} = this.props;
        return (
            <main className="mainNote mainContentRight">
                <ul className='mainNoteList'>
                    <MainNoteSelectedItem note={note} goBack={this.goBack}/>
                    <li className="NoteContent">{note.content}</li>
                </ul>
            </main>
        );
    }
}

export default MainNoteSelectedList;
