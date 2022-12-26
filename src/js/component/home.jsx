import React, { useState } from "react";
import ChooseWeapon from "./chooseWeapon.jsx";
import GameBoard from "./gameBoard.jsx";

//create your first component
const Home = () => {
	const [weapon, setWeapon] = useState(true)
	const [player, setPlayer] = useState("X")
	
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
	return weapon ? (
		<div className="text-center">
			<h1>Tic Tac Toe in React.js</h1>
			<ChooseWeapon handleWeaponClick={handleWeaponClick}/>
		</div>
	): (
		<div className="text-center">
			<h1>Tic Tac Toe in React.js</h1>
			<GameBoard player={player} handlePlayersTurn={handlePlayersTurn}/>
		</div>
	);
};

export default Home;
