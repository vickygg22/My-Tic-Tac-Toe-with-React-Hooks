import React from "react";
import StartOverButton from "./startOverButton.jsx";

const GameBoard = ({player, handlePlayersTurn}) => {
    
    return (
       <div className="boardMainDiv">
        <h3>It is {player} turn!</h3>
        <StartOverButton />
        <div className="board-grid">
            <button className="btnBorder1" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder2" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder3" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder4" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder5" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder6" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder7" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder8" onClick={handlePlayersTurn}>X</button>
            <button className="btnBorder9" onClick={handlePlayersTurn}>X</button>
        </div>
       </div>
    )
};
export default GameBoard;