import { useState } from 'react';
import {AppContext} from './AppContext';

interface props {
    children: React.ReactNode;
}

interface ArrayNotes {
    title: string,
    description: string,
    dateCreated: Date
}

export const AppContextProvider = ({ children }: props) => {

    const [arrayNotes, getArrayNotes] = useState<ArrayNotes[] | undefined>([]);

    const getNotes = () => {

    };

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};