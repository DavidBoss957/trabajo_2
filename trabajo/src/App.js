// src/App.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const yellowBackgroundStyle = {
    background: '#fff9c4', // Amarillo claro claro
    padding: '20px',
    minHeight: '100vh',

    
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  
  return (
    <div className="container mt-5" style={yellowBackgroundStyle}>
      <h1 className="text-center mb-4">My Notes App</h1>
      <div className="row">
        <div className="col-md-6">
          <NoteEditor addNote={(note) => setNotes([...notes, note])} />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar notas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <NoteList notes={notes} searchTerm={searchTerm} onDeleteNote={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
