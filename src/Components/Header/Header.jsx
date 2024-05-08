import React from "react";
import logo from "../../assets/game-logo.png"
import "./Header.css"

export default function Header() {
    return (
        <>
            <header>
                <img src={logo} alt="tic-tac-toe-logo" />
                <h1>Tic-tac-toe</h1>
                <p>Have some fun! 😃</p>
            </header>
        </>
    )
}