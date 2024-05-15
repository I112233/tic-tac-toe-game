import React, { useState } from "react";
import "./Player.css"

export default function Player({ initialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing)
    }
    function handleInputChange(event) {
        setPlayerName(event.target.value)
    }

    let editPlayer = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editPlayer = <input type="text" value={playerName} onChange={handleInputChange} />
    }

    return (
        <>
            <li className={isActive ? "active" : undefined}>
                <span className="player">
                    {editPlayer}
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
                </span>
            </li>
        </>
    )
}