import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainNoteSelectedList.css'
import MainNoteSelectedItem from '../MainNoteSelectedItem/MainNoteSelectedItem'
import { Link } from 'react-router-dom';
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
        const { note, history } = this.props;
        return (
            <main className="mainNote mainContentRight">
                <ul className='mainNoteList'>
                    <MainNoteSelectedItem note={note} goBack={this.goBack}/>
                    <li className="NoteContent">{note.content}</li>
                    <li>
                        <button onClick = {() => {
                                history.push(`/edit-note/${note.id}`)
                            }}
                        >
                            Edit
                        </button>
                    </li>
                </ul>
            </main>
        );
    }
}

export default MainNoteSelectedList;
