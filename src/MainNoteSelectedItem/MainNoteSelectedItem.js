import React from 'react';
import FolderNoteContext from '../FolderNoteContext';
function MainNoteSelectedItem(props){

        const {note, goBack}=props;
        // console.log(onClickCancel)

        return(
            <FolderNoteContext.Consumer>
                {(context) => {
                    const {deleteNote} = context
                    return (
                        <li className="mainNoteItem">
                            <div className="Note"> 
                                <p className="noteName">
                                    {note.name}
                                </p>
                                <br/>
                                <p>{note.modified}</p>
                                
                            </div>
                            <div className="Delete">
                                <button 
                                    // onClick = {goBack}
                                    // onClick = {() => goBack(item)}
                                    onClick={() => {
                                        goBack();
                                        deleteNote(note.id);
                                    }}
                                    type='button'
                                >
                                    delete
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

export default MainNoteSelectedItem;
