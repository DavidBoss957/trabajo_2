// src/components/Note.js
import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <button onClick={() => onDelete(note.id)} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Note;
