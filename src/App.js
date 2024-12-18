import React, { useState } from "react";
import Managing from "./Compenants/Managing/Managing";
import FolderNotes from './Compenants/FolderNotes/FolderNotes.jsx';
import Note from "./Compenants/Note/Note";
import NoteDetails from "./Compenants/NoteDetails/NoteDetails.jsx";
import "./App.css";

function App() {
    const [selectedFolder, setSelectedFolder] = useState('');
    const [notes, setNotes] = useState({
        Personal: [{ text: "Reflection on the Month of June", date: "01/06/2023", content: "", folder: "Personal", id: 1 }],
        Work: [{ text: "Project Proposal", date: "15/06/2023", content: "Description here", folder: "Work", id: 2 }],
        Travel: [{ text: "Travel Itinerary", date: "20/06/2023", content: "", folder: "Travel", id: 3 }],
        Events: [],
        Finances: [],
        Favorites: [],
        Trash: [],
        Archived: []
    });

    const [selectedNote, setSelectedNote] = useState(null);
    const [notification, setNotification] = useState(""); // État pour la notification

    const handleFolderClick = (folderName) => {
        setSelectedFolder(folderName); // Mettre à jour le dossier sélectionné
    };
    
    const handleNoteClick = (note) => {
        setSelectedNote(note);
    };
    
    const handleAddNote = (note) => {
        if (selectedFolder) {
            const currentDate = new Date().toLocaleDateString();
            setNotes((prevNotes) => ({
                ...prevNotes,
                [selectedFolder]: [...(prevNotes[selectedFolder] || []), { text: note, date: currentDate, id: Date.now() }]
            }));
        }
    };

    // Fonction pour ajouter une note aux favoris
    const handleAddToFavorites = (note) => {
        setNotes((prevNotes) => ({
            ...prevNotes,
            Favorites: [...prevNotes.Favorites, note] // Ajouter la note aux favoris
        }));
        setNotification("La note a été ajoutée aux favoris !");
        setTimeout(() => setNotification(""), 3000); // Effacer après 3 secondes
    };

    // Fonction pour déplacer une note vers la corbeille
    const handleMoveToTrash = (noteId) => {
        setNotes((prevNotes) => {
            // Trouver la note à déplacer vers la corbeille
            let movedNote = null;
            const updatedNotes = Object.keys(prevNotes).reduce((acc, folder) => {
                acc[folder] = prevNotes[folder].filter(note => {
                    if (note.id === noteId) {
                        movedNote = note; // Sauvegarder la note à déplacer
                        return false; // La supprimer du dossier actuel
                    }
                    return true;
                });
                return acc;
            }, {});

            if (movedNote) {
                // Déplacer la note vers la corbeille
                updatedNotes.Trash = [...updatedNotes.Trash, movedNote];
            }

            return updatedNotes;
        });
        setNotification("La note a été déplacée vers la corbeille !");
        setTimeout(() => setNotification(""), 3000); // Effacer après 3 secondes
    };

    return (
        <div className="App">
            <div className="layout">
                <Managing
                    onFolderClick={handleFolderClick}
                    selectedFolder={selectedFolder}
                    onAddNote={handleAddNote}
                />
                <FolderNotes 
                    selectedFolder={selectedFolder} 
                    notes={notes} 
                    onNoteClick={handleNoteClick} 
                />
                
                {selectedNote ? (
                    <NoteDetails 
                        note={selectedNote} 
                        onAddToFavorites={handleAddToFavorites} 
                        moveToTrash={handleMoveToTrash}  // Passer la nouvelle fonction à NoteDetails
                    />
                ) : (
                    <Note />
                )}
                
                {notification && <div className="notification">{notification}</div>} {/* Notification */}
            </div>
        </div>
    );
}

export default App;

