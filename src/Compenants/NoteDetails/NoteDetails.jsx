import React, { useState } from 'react';
import folderIcon from "../../Assets/folder.png";
import dateIcon from '../../Assets/date.png';
import addFavoriteIcon from '../../Assets/addfav.png';
import archivedIcon from '../../Assets/archive.png';
import deleteIcon from '../../Assets/trash.png';
import Bar from '../Bar/Bar';
import togle from '../../Assets/TOGLLE.png';
import './NoteDetails.css';

const NoteDetails = ({ note, onAddToFavorites, moveToTrash }) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleMoveToTrash = () => {
        moveToTrash(note.id);  // Appeler moveToTrash avec l'id de la note
    };

    return (
        <div className="note-details-container">
            <div className="head">
                <h1 className="note-title">{note.text}</h1>
                <div className="dropdown">
                    <button className="dropdown-toggle" onClick={toggleMenu}>
                        <img src={togle} alt="" className="image" />
                    </button>
                    {showMenu && (
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" onClick={() => onAddToFavorites(note)}>
                                <img src={addFavoriteIcon} alt="Add to favorites" className="icon" /> Add to favorites
                            </li>
                            <li className="dropdown-item">
                                <img src={archivedIcon} alt="Archived" className="icon" /> Archived
                            </li>
                            <li className="dropdown-item" onClick={handleMoveToTrash}>
                                <img src={deleteIcon} alt="Delete" className="icon" /> Move to Trash
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="note-info">
                <div className="note-date-section">
                    <img src={dateIcon} alt="Date Icon" className="image" />
                    <div className="note-details">
                        <h3 className="note-info-title">Date</h3>
                        <p className="note-date">{note.date}</p>
                    </div>
                </div>
                <div className="note-folder-section">
                    <img src={folderIcon} alt="Folder Icon" className="image" />
                    <div className="note-details">
                        <h3 className="note-info-title">Folder</h3>
                        <p className="note-folder">{note.folder}</p>
                    </div>
                </div>
            </div>

            <Bar />
            <div className="note-content">
                <p>{note.content}</p>
                
            </div>
        </div>
    );
};

export default NoteDetails;
