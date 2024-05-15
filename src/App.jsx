import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Player from "./Components/Header/Player/Player";
import GameBoard from "./Components/Header/GameBoard/GameBoard";

export default function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectedSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
          </ol>
          <GameBoard onSelectedSquare={handleSelectedSquare} activePlayerSymbol={activePlayer} />
        </div>
      </main>
    </>
  )
}