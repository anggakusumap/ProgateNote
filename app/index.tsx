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
    editNote: (id: number, title: string, desc: string) => void;
    deleteNote: (id: number) => void;
    selectedNote: Note | null;
    setSelectedNote: (note: Note | null) => void;
}

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote, selectedNote, setSelectedNote }: CurrentPageWidgetProps) => {
    switch (currentPage)
    {
        case 'home':
            return <Home noteList={noteList} setCurrentPage={setCurrentPage} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />;
        case 'add':
            return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
        case 'edit':
            return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} selectedNote={selectedNote} />;
        default:
            return <Home noteList={[]} setCurrentPage={setCurrentPage} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />; // Assuming Home can handle an empty list
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
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);

    const addNote = (title: string, desc: string) => {
        const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
        setNoteList([...noteList, { id, title, desc }]);
    };

    const editNote = (id: number, title: string, desc: string) => {
        setNoteList(
            noteList.map(note =>
                note.id === id ? { ...note, title, desc } : note
            )
        );
    };

    const deleteNote = (id: number) => {
        setNoteList(noteList.filter(note => note.id !== id));
    };

    return (
        <CurrentPageWidget
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            noteList={noteList}
            addNote={addNote}
            editNote={editNote}
            deleteNote={deleteNote}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
        />
    );
};

export default App;
