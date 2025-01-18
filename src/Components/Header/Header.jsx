import React from "react";
import logo from "../../assets/game-logo.png"
import "./Header.css"

export default function Header() {
    return (
        <>
            <header >
                <img style={{ marginLeft: "0px" }} src={logo} alt="tic-tac-toe-logo" />
                <h1 style={{ marginLeft: "0px" }}>Tic-tac-toe</h1>
                <p style={{ marginLeft: "30px" }}>Have some fun! 😃</p>
            </header>
        </>
    )
}