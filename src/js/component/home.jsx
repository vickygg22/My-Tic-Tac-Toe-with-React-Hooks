import React, { useState, useEffect } from "react";
import ChooseWeapon from "./chooseWeapon.jsx";
import GameBoard from "./gameBoard.jsx";
import {Patterns} from "./patterns.jsx"

//create your first component
const Home = () => {
	const [weapon, setWeapon] = useState(true);
	const [player, setPlayer] = useState("X");
	const [turn, setTurn] = useState(Array(9).fill(null));
	const [result, setResult] = useState({winner: "none", state: "none"});
	
	useEffect(() => {
		checkWinner();
	}, [turn]);

	useEffect(() => {
		if(result.state != "none"){
			alert(`Game finished! Winning Player: ${result.winner}`)
		}
		
	}, [result])

	const handleWeaponClick = () => {
		setWeapon(false)
	}
	const handlePlayersTurn = () => {
		if (player === "X"){
			setPlayer("O")
		} else if (player === "O"){
			setPlayer("X")
		}
	}
	const chooseSquare = (square) => {
		setTurn(turn.map((value, index) => {
			if(index == square && value == null){
				return player;
			}
			return value; 
		}))
		handlePlayersTurn();
	}
	const checkWinner = () => {
		Patterns.forEach((currentPattern) => {
			const firstPlayer = turn[currentPattern[0]];
			if (firstPlayer == null) return;
			let foundWinningPattern = true;
			currentPattern.forEach((index) => {
				if(turn[index] != firstPlayer){
					foundWinningPattern = false;
				}
			})
			if (foundWinningPattern){
				setResult({winner: player, state: "won"})
			}
		})
	};
	return weapon ? (
		<div className="text-center">
			<h1>Tic Tac Toe in React.js</h1>
			<ChooseWeapon handleWeaponClick={handleWeaponClick}/>
		</div>
	): (
		<div className="text-center">
			<h1>Tic Tac Toe in React.js</h1>
			<GameBoard player={player} handlePlayersTurn={handlePlayersTurn} setTurn={setTurn} turn={turn} chooseSquare={chooseSquare}/>
		</div>
	);
};

export default Home;
