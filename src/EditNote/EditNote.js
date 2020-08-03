import React, { Component } from 'react';
import './EditNote.css'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import {validateName, isAlpha, formatName} from '../ValidationHelper';
import config from '../config';

class EditNote extends Component {
    constructor(props){
        super();
        this.state = {
            name: {
                value: '',
                touched: false
            },
            content: {
                value: '',
                touched: false
            },
            nameRep: false
        };
        this.name = React.createRef();
    }
    
    static propTypes = {
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
    };
    static defaultProps = {
        history: {},
        note: {}
    };

    static contextType = FolderNoteContext;
    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/notes/${this.props.noteId}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${config.API_KEY}`
        }
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(res => {
            this.setState({
                name: {value: res.name, touched:true},
                content: {value: res.content, touched:true},
                folderId: res.folderId
            })
        })
        .catch(error => {
            alert("Something went wrong, please try again later.")
        })
    }
    updateName(name){
        this.setState({
            name: {value: name, touched: true},
            nameRep: false,
        });
    }

    updateContent(content){
        this.setState({content: {value: content, touched: true}});
    }
    handleSubmit = e => {
        e.preventDefault()
        const bookmarkLink = `${config.API_ENDPOINT}/api/notes/${this.props.noteId}`
        const noteName = formatName(this.state.name.value);
        const folderId = e.target['note-folder-id'].value;
        // const curFolderId = this.context.notes[Number(this.props.noteId)]
        // console.log(typeof this.props.folderId)
        // return
        for (let note of this.context.notes){
            if (note.name === noteName && note.folderId === Number(folderId) && Number(folderId) !== this.props.folderId){
                this.setState(
                    this.name.current.focus(),
                );
                this.setState({
                    nameRep: true
                })
                return
            }
        }
        const bookmark = {
            name: noteName,
            folderId: folderId,
            content: this.state.content.value,
        }
        
        const US_Date = new Intl.DateTimeFormat('en-US').format(new Date());
        const reverseDate = US_Date.split('/').reverse();
        const modified = reverseDate.map(item => item.length === 1 ? '0' + item : item);

        const newNotes = {
            id: Number(this.props.noteId),
            name: noteName,
            content: this.state.content.value,
            modified: modified.join('-'),
            folderId: Number(folderId),
        }

        fetch(bookmarkLink, {
          method: 'PATCH',
          body: JSON.stringify(bookmark),
          headers: {
            'content-type': 'application/json',
            'authorization': `bearer ${config.API_KEY}`
          }
        })
          .then(res => {
            if (!res.ok) {
              return res.text().then(message => {
                throw new Error(message)
              });
              // return res.json().then(error => Promise.reject(error))
            }
          })
          .then(data => {
            this.context.updateNote(newNotes)
            // this.props.history.pop()
            this.props.history.push(`/note/${this.props.noteId}`)
            // console.log(data)
          })
          .catch(error => {
            alert(error.message)
            // this.setState({ error })
          })
      }
    render(){
        const { history } = this.props;
        const {folders} = this.context;
        const nameError = validateName;
        // const contentError = validateContent;
        const alphaCheck = isAlpha;
        const nameRep = this.state.nameRep? <p className="error">This note name has already been used in this folder. Try another name or folder.</p> : "";
        // const nameRep = this.state.nameRep? <p className="error">This note name has already been used. Try another name.</p> : "";
        // console.log(this.state)

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
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            className="folderNameInput"
                            ref={this.name}
                            name="name" 
                            id="name"
                            aria-label="Name"
                            aria-required="true"
                            aria-describedby="noteNameError"
                            aria-invalid={this.state.nameRep} 
                            defaultValue = {this.state.name.value}
                            required
                            onChange={e => this.updateName(e.target.value)}
                        />
                    </div>
                    {this.state.name.touched && (
                        <ValidationError id="noteNameError" message={nameError(this.state.name.value, alphaCheck)} />
                    )}
                    {nameRep}
                    <div className="contentGroup">
                        <label htmlFor="content">Content</label>
                        <textarea 
                            type="text" 
                            className="folderNameInput" 
                            rows="4"
                            name="content" 
                            id="content" 
                            aria-label="Content"
                            aria-required="true"
                            aria-describedby="folderContentError"
                            aria-invalid="false"
                            defaultValue = {this.state.content.value}
                            // required
                            onChange={e => this.updateContent(e.target.value)}
                        />
                    </div>
                    {/* cotent validation */}
                    {/* {this.state.content.touched && (
                        <ValidationError id ="folderContentError" message={contentError(this.state.content)} />
                    )} */}
                                     
                    <div className='field'>
                        <label htmlFor='note-folder-select'>
                            Folder
                        </label>
                        <select id='note-folder-select' name='note-folder-id' required>
                        {/* <option value="">...</option> */}
                        {folders.map(folder =>{
                            return (
                                folder.id === this.state.folderId ?
                                <option key={folder.id} value={folder.id} selected>
                                {folder.name}
                                </option>  :
                                <option key={folder.id} value={folder.id}>
                                {folder.name}
                                </option>
                            )
                            }
                        )}
                        </select>
                    </div> 
                    <div className="submitGroup">
                        <button 
                            type="submit"
                            disabled={nameError(this.state.name.value, alphaCheck)} 
                            // disabled={nameError(this.state.name, alphaCheck) || contentError(this.state.content)} 
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

export default EditNote;
