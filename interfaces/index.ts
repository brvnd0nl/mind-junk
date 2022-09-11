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

export interface Notification {
    type: string,
    title: string,
    body: string,
    timeout: number
}

export interface AppContextType {
    arrayNotes: Array<Note>,
    note: Note,
    isEdited: boolean,
    isDeleted: boolean,
    showNotification: boolean,
    notificationData: Notification,
    currentPage: number,
    notesPerPage: number,
    searchNotes: string,
    createNote: (note: Note) => void,
    getNoteEdit: (note: Note) => void,
    editNote: (note: Note) => void,
    deleteNote: (idNote: string) => void,
    setIsEdited: React.Dispatch<React.SetStateAction<Boolean>>,
    setIsDeleted: React.Dispatch<React.SetStateAction<Boolean>>,
    notificationHandler: (notification: Notification) => void,
    changePageNotes: (newPage: number) => void
    setSearchNotes: React.Dispatch<React.SetStateAction<string>>,
    isMobileDevice: () => boolean,

}