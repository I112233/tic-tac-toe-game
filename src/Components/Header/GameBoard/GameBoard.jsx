import React, { useState } from "react";
import "./GameBoard.css";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectedSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectedSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGame = [
                ...prevGameBoard.map((innerArray) => [...innerArray]),
            ];
            updatedGame[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGame;
        });

        onSelectedSquare();
    }


    return (
        <>
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleSelectedSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    );
}
