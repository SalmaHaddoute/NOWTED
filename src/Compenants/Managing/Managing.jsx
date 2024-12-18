import React, { useState } from 'react';
import './Managing.css'; // Importation du fichier CSS
import logo from '../../Assets/Group 1.png';
import search from '../../Assets/search.png';
import add from '../../Assets/add.png';
import file from '../../Assets/Frame.png';
import folder from '../../Assets/folder.png';
import addfolder from '../../Assets/addFolder.png';
import archive from '../../Assets/archive.png';
import star from '../../Assets/star.png';
import trash from '../../Assets/trash.png';

const Managing = ({ onFolderClick, selectedFolder, onAddNote }) => {
    const [showInput, setShowInput] = useState(false); // Contrôle de l'affichage de l'input
    const [newNote, setNewNote] = useState(''); // Contenu de la nouvelle note

    const handleAddNote = () => {
        if (showInput && newNote.trim()) {
            // Ajouter la note si une valeur est entrée
            onAddNote(newNote);
            setNewNote(''); // Réinitialiser l'input
        }
        setShowInput(!showInput); // Afficher/Masquer l'input
    };

    return (
        <div className="sidebar">
            {/* Logo */}
            <div className="sidebar-header">
                <img src={logo} alt="Logo" className="logo" />
                <img src={search} alt="Search" className="icon search-icon" />
            </div>

            {/* Input pour ajouter une nouvelle note */}
            {showInput && (
                <input
                    type="text"
                    className="new-note-input"
                    placeholder={`Add a note to ${selectedFolder}`}
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
            )}

            {/* Bouton Nouvelle Note */}
            <button className="new-note-btn" onClick={handleAddNote}>
                <img src={add} alt="Add" className="icon add-icon" />
                {showInput ? 'Save Note' : 'New Note'}
            </button>

            {/* Recents Section */}
            <div className="section">
                <h2 className="section-title">Recents</h2>
                <ul>
                    <li className="sidebar-item active">
                        <img src={file} alt="File" className="icon" />
                        Reflection on the Month of June
                    </li>
                    <li className="sidebar-item">
                        <img src={file} alt="File" className="icon" />
                        Project Proposal
                    </li>
                    <li className="sidebar-item">
                        <img src={file} alt="File" className="icon" />
                        Travel Itinerary
                    </li>
                </ul>
            </div>

            {/* Folders Section */}
            <div className="section">
                <div className="section-header">
                    <h2 className="section-title">Folders</h2>
                    <img src={addfolder} alt="Add Folder" className="icon add-folder-icon" />
                </div>
                <ul>
                    <li className="sidebar-item" onClick={() => onFolderClick('Personal')}>
                        <img src={folder} alt="Folder" className="icon" />
                        Personal
                    </li>
                    <li className="sidebar-item" onClick={() => onFolderClick('Work')}>
                        <img src={folder} alt="Folder" className="icon" />
                        Work
                    </li>
                    <li className="sidebar-item" onClick={() => onFolderClick('Travel')}>
                        <img src={folder} alt="Folder" className="icon" />
                        Travel
                    </li>
                    <li className="sidebar-item" onClick={() => onFolderClick('Events')}>
                        <img src={folder} alt="Folder" className="icon" />
                        Events
                    </li>
                    <li className="sidebar-item" onClick={() => onFolderClick('Finances')}>
                        <img src={folder} alt="Folder" className="icon" />
                        Finances
                    </li>
                </ul>
            </div>

            {/* More Section */}
            <div className="section">
                <h2 className="section-title">More</h2>
                <ul>
                <li className="sidebar-item" onClick={() => onFolderClick('Favorites')}>
                    <img src={star} alt="Star" className="icon" />
                    Favorites
                </li>
                <li className="sidebar-item" onClick={() => onFolderClick('Trash')}>
                    <img src={trash} alt="Trash" className="icon" />
                    Trash
                </li>
                <li className="sidebar-item" onClick={() => onFolderClick('Archived')}>
                    <img src={archive} alt="Archive" className="icon" />
                    Archived Notes
                </li>

                </ul>
            </div>
        </div>
    );
};

export default Managing;
