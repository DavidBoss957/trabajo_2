// src/components/NoteEditor.js
import React, { useState } from 'react';

function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNote = () => {
    if (title.trim() !== '' && content.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title,
        content,
      };
      addNote(newNote);
      setTitle('');
      setContent('');
    }
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nueva Nota</h5>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          placeholder="Contenido de la nota"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={handleAddNote} className="btn btn-success">
          Agregar Nota
        </button>
      </div>
    </div>
  );
}

export default NoteEditor;
