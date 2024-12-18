import React from "react";
import './FolderNotes.css';

const FolderNotes = ({ selectedFolder, notes,onNoteClick }) => {
    return (
        <div className="note-list-container bg-gray-950">
            {selectedFolder ? (
                <div className="folder-content">
                    {/* Affichage du titre du dossier */}
                    <h2 className="folder-title">{selectedFolder}</h2>
                    
                    {/* Affichage des notes du dossier */}
                    {notes[selectedFolder] && notes[selectedFolder].length > 0 ? (
                        <ul className="note-list">
                        {notes[selectedFolder].map((note, index) => (
                            <li 
                                key={index} 
                                className="note-item" 
                                onClick={() => onNoteClick(note)}
                            >
                                <h3>{note.text}</h3>
                                <p className="note-date">{note.date}</p>
                            </li>
                        ))}

                    </ul>

                    ) : (
                        <p className="empty-message">Folder is empty.</p>  
                    )}
                </div>
            ) : (
                <p className="select-folder-message">Select a folder to view notes</p>  
            )}
        </div>
    );
};

export default FolderNotes;
