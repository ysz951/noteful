import React, { Component } from 'react';
import MainNoteItem from '../MainNoteItem/MainNoteItem'
import './AddFolder.css'
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types';
import {validateName, formatName} from '../ValidationHelper';

class AddFolder extends Component {
    state = {
        name: {
          value: "",
          touched: false
        },
    };
    static propTypes = {
        history: PropTypes.shape({
          goBack: PropTypes.func,
        }).isRequired,
      };
    static defaultProps = {
        history: {}
    };
 
    static contextType = FolderNoteContext;
    

    updateName(name){
        this.setState({name: {value: name, touched: true}});
    }

    handleSubmit = e =>{
        e.preventDefault();
        const {name} = this.state;
        const folderName = formatName(name.value)
        // console.log(name.value, formatName)
        for (let folder of this.context.folders){
            if (folder.name === folderName ){
                alert('warning');
                return
            }
        }
        const folder = {
            name: folderName,
        };
        

        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
              'content-type': 'application/json',
            }
          })
            .then(res => {
              if (!res.ok) {
                return res.json().then(error => Promise.reject(error))
              }
              return res.json()
            })
            .then(data => {
              this.context.handleAddFolder(data);
              this.props.history.goBack();
            })
            .catch(error => {
              console.error(error)
            })
    }
    render(){
        const {history} = this.props;
        // console.log(typeof history)
        const nameError = validateName;
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
                <h2>Add a folder</h2>
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
                    <div className="registration__button__group">
 
                        <button type="submit" className="registration__button"
                            disabled={nameError(this.state.name)}
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

export default AddFolder;
