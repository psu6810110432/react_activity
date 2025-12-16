
import React, { useState } from 'react';


interface NoteFormProps {

  onAdd: (text: string) => void; 
}


function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) { 
        alert('Note cannot be empty!');
        return;
    }
    
    onAdd(text); 
    setText(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type a new note..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;