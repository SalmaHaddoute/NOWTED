import React from 'react';
import file from '../../Assets/file.png'; 
import './Note.css'; 

const Note = ({ selectedNote }) => {
    return (
        <div className="note-details-container">
            {selectedNote ? (
                <div>
                    <h2 className="note-title">{selectedNote}</h2>
                </div>
            ) : (
                <div className="empty-state">
                    <img src={file} alt="File Icon" className="file-icon" />
                    <p className="empty-message">Select a note to view.<br />
                    Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</p>
                </div>
            )}
        </div>
    );
};

export default Note;
