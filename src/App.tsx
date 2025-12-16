
import { useState } from 'react';
import { type Note } from './types'; 
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css'; 

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  
  const addNote = (text: string) => {
    if (!text.trim()) return; 

    const newNote: Note = {
      id: Date.now(), 
      text: text.trim(), 
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  

  const deleteNote = (id: number) => {  }; 

  return (
    <div className="app-container">
      <h1>Sticky Notes Wall</h1>
      
      {}
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;