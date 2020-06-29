import React from 'react'

const FolderNoteContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
})

export default FolderNoteContext