import React from 'react'

const FolderNoteContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
    handleAddFolder: () => {},
    addNote: () => {},
    deleteFolder: () => {},
})

export default FolderNoteContext