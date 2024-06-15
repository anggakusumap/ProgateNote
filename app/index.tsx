import React, { useState } from 'react';
import AddNote from '@/screens/addNote';
import EditNote from '@/screens/editNote';
import Home from '@/screens/home';

interface Note {
    id: number;
    title: string;
    desc: string;
}

interface CurrentPageWidgetProps {
    currentPage: string;
    noteList: Note[];
    setCurrentPage: (page: string) => void;
    addNote: (title: string, desc: string) => void;
}

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote }: CurrentPageWidgetProps) => {
    switch (currentPage)
    {
        case 'home':
            return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
        case 'add':
            return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
        case 'edit':
            return <EditNote />;
        default:
            return <Home noteList={[]} setCurrentPage={setCurrentPage} />; // Assuming Home can handle an empty list
    }
};

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [noteList, setNoteList] = useState<Note[]>([
        {
            id: 1,
            title: 'Note pertama',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        },
    ]);

    const addNote = (title: string, desc: string) => {
        const id =
            noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

        setNoteList([
            ...noteList,
            {
                id,
                title: title,
                desc: desc,
            },
        ])
    }

    return (
        <CurrentPageWidget
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            noteList={noteList}
            addNote={addNote}
        />
    );
};

export default App;