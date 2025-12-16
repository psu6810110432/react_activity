// src/App.tsx
import { useState, useEffect } from 'react';
import { type Note } from './types'; 
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'; 

const getInitialNotes = (): Note[] => {
    const saved = localStorage.getItem('sticky-notes');
    if (saved) {
        return JSON.parse(saved) as Note[];
    }
    return [];
};

function App() {
  const [notes, setNotes] = useState<Note[]>(getInitialNotes); 
  
  const addNote = (text: string) => {
    if (!text.trim()) return; 

    const newNote: Note = {
      id: Date.now(), 
      text: text.trim(), 
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  
  const deleteNote = (id: number) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== id));
  };

  
  useEffect(() => {
    localStorage.setItem('sticky-notes', JSON.stringify(notes));
  }, [notes]); 

  return (
    <div className="app-container">
      <h1>Sticky Notes Wall</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;