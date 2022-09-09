export interface props {
    children: React.ReactNode;
}

export interface NoteComponentsProps {
    data: Note
}

export interface Note {
    id: string,
    title: string,
    description: string,
    dateCreated: number
}

export interface AppContextType {
    arrayNotes: Array<Note>,
    note: Note,
    isEdited: boolean,
    isDeleted: boolean,
    createNote: (note: Note) => void,
    getNoteEdit: (note: Note) => void,
    editNote: (note: Note) => void,
    setIsEdited: React.Dispatch<React.SetStateAction<Boolean>>,
    setIsDeleted: React.Dispatch<React.SetStateAction<Boolean>>
}