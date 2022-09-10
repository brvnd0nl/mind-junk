import React, { createContext, useContext, useState, useEffect } from "react";
import { AppContextType, Note, Notification, props } from "../interfaces";

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
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState<Notification>({
    title: "",
    body: "",
    type: "",
    timeout: 4000,
  });

  const createNote = (note: Note) => {
    setArrayNotes([note, ...arrayNotes] as Array<Note>);
    setNote(note);
    notificationHandler({
      ...notificationData,
      title: "Note Created",
      body: "Note created sucessfully",
      type: "success",
    });
  };

  const setNotesLocalStorage = () => {
    localStorage.setItem("notes", JSON.stringify(arrayNotes));
  };

  const getNoteEdit = (data: Note) => {
    if (!data) return;
    const oldNote = arrayNotes.find((item) => item.id === data.id);

    setNote(oldNote);
    setIsEdited(true);
  };

  const handleDeleteNote = (id: string) => {
    const newArrayNotes = arrayNotes.filter((item) => item.id !== id);

    setArrayNotes(newArrayNotes);
    const time = setTimeout(() => {
      setNotesLocalStorage();
    }, 100);
    notificationHandler({
      ...notificationData,
      title: "Note Deleted",
      body: "Note deleted sucessfully",
      type: "success",
    });

    clearTimeout(time);
  };

  const editNote = (data: Note) => {
    const newNotes = arrayNotes.map((item) => {
      if (item.id === data.id) return data;
      return item;
    });

    setArrayNotes(newNotes);
    const time = setTimeout(() => {
      setNotesLocalStorage();
    }, 100);

    notificationHandler({
      ...notificationData,
      title: "Note Edited",
      body: "Note edited sucessfully",
      type: "success",
    });

    setIsEdited(false);
    clearTimeout(time);
  };

  const notificationHandler = (notification: Notification) => {
    setNotificationData(notification);
    const time = setTimeout(() => {
      setShowNotification(true);
    }, 20);
  };

  useEffect(() => {
    const sessionNotes =
      JSON.parse(localStorage.getItem("notes") as string) ??
      ([] as Array<Note>);
    if (sessionNotes.length > 0) setArrayNotes(sessionNotes);
  }, []);

  useEffect(() => {
    if (note && !isEdited) setNotesLocalStorage();
  }, [note]);

  useEffect(() => {
    if (showNotification) {
      const time = setTimeout(() => {
        setShowNotification(false);
      }, notificationData.timeout ?? 0);

      return () => clearTimeout(time);
    }
  }, [showNotification]);

  return (
    <AppContext.Provider
      value={{
        arrayNotes,
        note,
        isEdited,
        isDeleted,
        showNotification,
        notificationData,
        createNote,
        getNoteEdit,
        editNote,
        setIsEdited,
        setIsDeleted,
        notificationHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
