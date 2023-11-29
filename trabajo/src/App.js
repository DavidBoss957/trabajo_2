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
    const sanitizedNotes = storedNotes.map((note) => ({
      ...note,
      title: note.title || 'Default Title',
    }));
    setNotes(sanitizedNotes);
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const yellowBackgroundStyle = {
    background: '#fff9c4',
    padding: '20px',
    minHeight: '100vh',
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Debugging: Log original and filtered notes
  console.log('Original notes:', notes);

  const filteredNotes = notes
    .filter((note) => {
      if (!note || !note.title || typeof note.title !== 'string') {
        console.error('Invalid note:', note);
        return false; // Skip invalid notes
      }
      return true;
    })
    .filter((note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()));

  console.log('Filtered note titles:', filteredNotes.map((note) => note.title));

  return (
    <div className="container mt-5" style={yellowBackgroundStyle}>
      <h1 className="text-center mb-4">My Notes App</h1>
      <div className="row">
        <div className="col-md-6">
          <NoteEditor addNote={addNote} />
          
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
