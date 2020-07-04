import React, { Component } from 'react';
import './AddNote.css'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import {validateName, validateContent, formatName} from '../ValidationHelper';
import config from '../config';

class AddNote extends Component {
    constructor(){
        super();
        this.state = {
            name: {
                value: "",
                touched: false
            },
            content: {
                value: "",
                touched: false
            },
            dupli: false
        };
        this.name = React.createRef();
    }
    
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
        this.setState({
            name: {value: name, touched: true},
            dupli:false,
        });
    }

    updateContent(content){
        this.setState({content: {value: content, touched: true}});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {name} = this.state;
        const folderId = e.target['note-folder-id'].value;
        const noteName = formatName(name.value);

        for (let note of this.context.notes){
            if (note.name === noteName && note.folderId === folderId ){
                this.setState(
                    this.name.current.focus(),
                );
                this.setState({
                    dupli: true
                })
                // alert('This note name has already been used in this folder.\nTry another name or folder.');
                return
            }
        }
        const newNote = {
            name: noteName,
            content: this.state.content.value,
            folderId: folderId ,
            modified: new Date(),
        }
        fetch(`${config.API_ENDPOINT}/notes`, {
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
              note.modified = note.modified.slice(0,10)
              this.context.addNote(note)
              this.props.history.push(`/folder/${note.folderId}`)
            })
            .catch(error => {
              alert("Something went wrong, please try again later.")
            })
        
    }
    render(){
        const {history} = this.props;
        const {folders} = this.context;
        const nameError = validateName;
        const contentError = validateContent;
        const dupli = this.state.dupli ? <p className="error">This note name has already been used in this folder. Try another name or folder.</p> : "";
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
                <form className="addNoteForm" onSubmit={this.handleSubmit}>
                    <div className="nameGroup">
                        <label htmlFor="name" ref={this.name}>Name</label>
                        <input type="text" className="folderNameInput"
                        
                        name="name" id="name" required
                        onChange={e => this.updateName(e.target.value)}
                        />
                    </div>
                    {this.state.name.touched && (
                        <ValidationError message={nameError(this.state.name)} />
                    )}
                    {dupli}
                    <div className="contentGroup">
                        <label htmlFor="content">Content</label>
                        <textarea type="text" className="folderNameInput" rows="4"
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
                    <div className="submitGroup">
                        <button 
                            type="submit"
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
