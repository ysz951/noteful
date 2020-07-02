import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'
import './AddNote.css'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import {validateName, validateContent, formatName} from '../ValidationHelper';

class AddNote extends Component {
    state = {
        name: {
            value: "",
            touched: false
        },
        content: {
            value: "",
            touched: false
        },
    };
    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };
    static defaultProps = {
        history: {}
    };

    static contextType = FolderNoteContext;
    

    updateName(name){
        this.setState({name: {value: name, touched: true}});
    }

    updateContent(content){
        this.setState({content: {value: content, touched: true}});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {name} = this.state;
        // console.log(name.value.split(' '))
        const noteName = formatName(name.value);

        for (let note of this.context.notes){
            if (note.name === noteName && note.folderId === e.target['note-folder-id'].value){
                alert('warning');
                return
            }
        }
        const newNote = {
            name: noteName,
            content: this.state.content.value,
            folderId: e.target['note-folder-id'].value,
            modified: new Date(),
        }
        // return
        // console.log(JSON.stringify(newNote ))
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
          })
            .then(res => {
              if (!res.ok)
                return res.json().then(e => Promise.reject(e))
              return res.json()
            })
            .then(note => {
              this.context.addNote(note)
              this.props.history.push(`/folder/${note.folderId}`)
            })
            .catch(error => {
              console.error({ error })
            })
        
    }
    render(){
        const {history} = this.props;
        const {folders} = this.context;
        // if (notes.length) console.log(notes[0].modified)
        // console.log(typeof history)
        const nameError = validateName;
        const contentError = validateContent;
        return (
            <>
            <nav className="mainContentLeft addFolderNav">
            <button 
                className="goBackBtn" 
                onClick={() => history.goBack()}
                type='button'
            >
                <FontAwesomeIcon icon={faChevronLeft}/>
                <span> BACK</span>
            </button>
            </nav>
            <main className="mainContentRight">
                <h2>Add a note</h2>
                <form className="registration" onSubmit={this.handleSubmit}>
                    
                    {/* <div className="registration__hint">* required field</div>   */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="folderNameInput"
                        name="name" id="name" required
                        onChange={e => this.updateName(e.target.value)}
                        />
                    </div>
                    {this.state.name.touched && (
                        <ValidationError message={nameError(this.state.name)} />
                    )}
                    <div className="formss">
                        <label htmlFor="content">Content</label>
                        <input type="text" className="folderNameInput"
                        name="content" id="content" required
                        onChange={e => this.updateContent(e.target.value)}
                        />
                    </div>
                    {this.state.content.touched && (
                        <ValidationError message={contentError(this.state.content)} />
                    )}
                    <div className='field'>
                        <label htmlFor='note-folder-select'>
                        Folder
                        </label>
                        <select id='note-folder-select' name='note-folder-id' required>
                        <option value="">...</option>
                        {folders.map(folder =>
                            <option key={folder.id} value={folder.id}>
                            {folder.name}
                            </option>
                        )}
                        </select>
                    </div>
                    <div className="registration__button__group">
 
                        <button type="submit" className="registration__button"
                            disabled={nameError(this.state.name) || contentError(this.state.content)} 
                        >
                            OK
                        </button>
                    </div>
                    </form>
                </main>
                </>
   )
 }
}

export default AddNote;
