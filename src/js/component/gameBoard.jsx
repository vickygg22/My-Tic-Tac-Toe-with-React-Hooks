import React from "react";
import StartOverButton from "./startOverButton.jsx";
import Square from "./square.jsx";

const GameBoard = ({player, handlePlayersTurn, setTurn, turn, chooseSquare}) => {
    const bothHandleTurns = () => {
        handlePlayersTurn();
        handleBoardTurn();
    }
    return (
       <div className="boardMainDiv">
        <h3>It is {player} turn!</h3>
        <StartOverButton />
        <div className="board-grid">
            <Square value={turn[0]} chooseSquare={() => {chooseSquare(0)}}/>
            <Square value={turn[1]} chooseSquare={() => {chooseSquare(1)}}/>
            <Square value={turn[2]} chooseSquare={() => {chooseSquare(2)}}/>
            <Square value={turn[3]} chooseSquare={() => {chooseSquare(3)}}/>
            <Square value={turn[4]} chooseSquare={() => {chooseSquare(4)}}/>
            <Square value={turn[5]} chooseSquare={() => {chooseSquare(5)}}/>
            <Square value={turn[6]} chooseSquare={() => {chooseSquare(6)}}/>
            <Square value={turn[7]} chooseSquare={() => {chooseSquare(7)}}/>
            <Square value={turn[8]} chooseSquare={() => {chooseSquare(8)}}/>
        </div>
       </div>
    )
};
export default GameBoard;