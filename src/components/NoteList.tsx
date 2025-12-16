
import React from 'react';
import { type Note } from '../types'; 


interface NoteListProps {
  notes: Note[]; 
  onDelete: (id: number) => void; 
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-item">
            <p>{note.text}</p>
            {}
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;