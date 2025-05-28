import { useState } from 'react';
import React from 'react';

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    let updateBlue = () => {
        setMoves((prevMoves) => ({ ...prevMoves, blue: prevMoves.blue + 1 }));
    };

    let updateYellow = () => {
        setMoves((prevMoves) => ({ ...prevMoves, yellow: prevMoves.yellow + 1 }));
    };

    let updateGreen = () => {
        setMoves((prevMoves) => ({ ...prevMoves, green: prevMoves.green + 1 }));
    };

    let updateRed = () => {
        setMoves((prevMoves) => ({ ...prevMoves, red: prevMoves.red + 1 }));
    };

    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue Moves: {moves.blue}</p>
                <button style={{ backgroundColor: "blue", color: "white" }} onClick={updateBlue}>+1</button>

                <p>Yellow Moves: {moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={updateYellow}>+1</button>

                <p>Green Moves: {moves.green}</p>
                <button style={{ backgroundColor: "green", color: "white" }} onClick={updateGreen}>+1</button>

                <p>Red Moves: {moves.red}</p>
                <button style={{ backgroundColor: "red", color: "white" }} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
