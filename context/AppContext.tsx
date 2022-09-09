import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, Note, props } from "../interfaces";

export const AppContext = createContext({});

export const useAppContext = () => {
  const context = useContext(AppContext) as AppContextType;

  if (!context)
    throw new Error("useAppContext must be used within a AppContextProvider");

  return context;
};

export const AppContextProvider = ({ children }: props) => {
  const [arrayNotes, setArrayNotes] = useState<Array<Note>>([]);
  const [note, setNote] = useState<Note>();
  const [isEdited, setIsEdited] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const createNote = (note: Note) => {
    setArrayNotes([note, ...arrayNotes] as Array<Note>);
    setNote(note);
  };

  const setNotesLocalStorage = () => {    
    localStorage.setItem('notes',JSON.stringify(arrayNotes));
  };

  const getNoteEdit = (data: Note) => {
    if(!data) return;
    const oldNote = arrayNotes.find(item => item.id === data.id);
    
    setNote(oldNote);
    setIsEdited(true);

  }

  const handleDeleteNote = (id: string) => {
    const newArrayNotes = arrayNotes.filter(item => item.id !== id);

    setArrayNotes(newArrayNotes);
    setTimeout(() => {      
      setNotesLocalStorage();
    }, 20);
  }

  const editNote = (data: Note) => {

    const newNotes = arrayNotes.map(item => {
      if (item.id === data.id) return data;
      return item;
    });

    setArrayNotes(newNotes);
    setTimeout(() => {      
      setNotesLocalStorage();
    }, 20);
  };

  useEffect(() => {
    const sessionNotes = JSON.parse(localStorage.getItem('notes') as string) ?? [] as Array<Note>;
    if(sessionNotes.length > 0) setArrayNotes(sessionNotes);
  },[])

  useEffect(() => {    
    if (note && !isEdited) setNotesLocalStorage();
  }, [note]);

  return (
    <AppContext.Provider
      value={{
        arrayNotes,
        note,
        isEdited,
        isDeleted,
        createNote,
        getNoteEdit,
        editNote,
        setIsEdited,
        setIsDeleted
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
