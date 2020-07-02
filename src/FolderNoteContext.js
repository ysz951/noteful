import React from 'react'

const FolderNoteContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    handleAddFolder: () => {},
    addNote: () => {},
})

export default FolderNoteContext