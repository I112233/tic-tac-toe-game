import React, { useState } from "react";
import "./Player.css"
// 3 adding state for making the edit button work

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing)
    }

    let editPlayer = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editPlayer = <input type="text" />
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