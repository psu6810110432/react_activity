// src/components/NoteForm.tsx
import React, { useState } from 'react';

// 1. กำหนด Interface สำหรับ Props
interface NoteFormProps {
  // onAdd ต้องเป็นฟังก์ชันที่รับ string และไม่คืนค่า
  onAdd: (text: string) => void; 
}

// 2. รับ Props เข้ามาใน Component
function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  // การจัดการ Event: ถ้าเขียน inline ใน onChange มักจะไม่ต้องระบุ type 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // 3. จัดการ onSubmit (Event Type คือ React.FormEvent)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!text.trim()) { // ป้องกันการ Add ข้อความว่างเปล่า
        alert('Note cannot be empty!');
        return;
    }
    
    onAdd(text); // เรียกใช้ Prop onAdd ที่ส่งมาจาก App.tsx
    setText(''); // เคลียร์ Input
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