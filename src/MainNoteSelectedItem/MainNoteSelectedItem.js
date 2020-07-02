import React from 'react';
import PropTypes from 'prop-types';
import FolderNoteContext from '../FolderNoteContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-regular-svg-icons';

function MainNoteSelectedItem(props){
    const {note, goBack}=props;
        return(
            <FolderNoteContext.Consumer>
                {(context) => {
                    const {deleteNote} = context
                    return (
                        <li className="mainNoteItem">
                            <div className="Note"> 
                                <h2 className="noteName">
                                    {note.name}
                                </h2>
                                <br/>
                                <p>Modified <span>&ensp;</span> <span>{note.modified}</span></p> 
                                {/* <p>{format(note.modified, 'Do MMM YYYY')}</p> */}
                                
                            </div>
                            <div className="Delete">
                                <button 
                                    onClick={() => {
                                        goBack();
                                        deleteNote(note.id);
                                    }}
                                    type='button'
                                >
                                    <FontAwesomeIcon className="deleteIcon"icon={faTrashAlt}/>
                                    <span> Delete</span>
                                </button>
                            </div>
                        </li>
                    );
                }}
            </FolderNoteContext.Consumer>
        )
}
MainNoteSelectedItem.defaultProps = {
    note: {},
    goBack: () => {},
};

MainNoteSelectedItem.propTypes ={
    goBack: PropTypes.func.isRequired,
    note: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
        modified: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]).isRequired,
    }).isRequired,
};
export default MainNoteSelectedItem;
