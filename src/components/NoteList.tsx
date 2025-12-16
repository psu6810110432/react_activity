// src/components/NoteList.tsx
import React from 'react';
import { Note } from '../types'; // ⬅️ นำเข้า Note Interface

// 1. กำหนด Props: interface NoteListProps { notes: Note[]; }
interface NoteListProps {
  notes: Note[]; // ต้องรับ Array ของ Note
  onDelete: (id: number) => void; // (เพิ่มเข้ามาเพื่อเตรียมสำหรับ Phase 3)
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          // ใช้ note.id เป็น key
          <div key={note.id} className="note-item">
            <p>{note.text}</p>
            {/* ปุ่ม Delete จะใช้งานได้จริงใน Phase 3 */}
            <button onClick={() => onDelete(note.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;