import React, { useState } from "react";
import "./Player.css"
// 3 we want to change the player name and be able to save it

export default function Player({ initialName, symbol }) {
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
            <li>
                <span className="player">
                    {editPlayer}
                    <span className="player-symbol">{symbol}</span>
                    <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
                </span>
            </li>
        </>
    )
}