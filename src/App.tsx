// src/App.tsx
import { useState } from 'react';
import { Note } from './types'; // ⬅️ Import Note Interface
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

function App() {
  // 1. ประกาศ State แบบกำหนด Type: const [notes, setNotes] = useState<Note[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  // 2. สร้างฟังก์ชัน addNote (ระวังการกำหนด Type ของ Parameter: text: string)
  const addNote = (text: string) => {
    // Basic validation (Challenge Optional: ห้าม Add หากข้อความว่างเปล่า)
    if (!text.trim()) return;
      
    const newNote: Note = {
      id: Date.now(), // ใช้ timestamp เป็น ID ชั่วคราว
      text: text.trim(),
    };
    
    // อัปเดต State โดยใช้ Functional Update เพื่อความปลอดภัย
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  
  // (จะเพิ่ม deleteNote ใน Phase 3)
  const deleteNote = (id: number) => { /* placeholder */ }; 

  return (
    <div className="app-container">
      <h1>Sticky Notes Wall</h1>
      {/* ส่งฟังก์ชัน addNote ลงไปเป็น Prop onAdd */}
      <NoteForm onAdd={addNote} />
      {/* ส่ง State notes ลงไปเป็น Prop notes */}
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;