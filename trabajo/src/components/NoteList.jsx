// src/components/NoteList.js
import React from 'react';
import Note from './Note';

function NoteList({ notes, searchTerm, onDeleteNote }) {
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-list">
      {filteredNotes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
