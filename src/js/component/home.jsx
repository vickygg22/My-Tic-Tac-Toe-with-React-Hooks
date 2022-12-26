import React, { useState } from "react";
import ChooseWeapon from "./chooseWeapon.jsx";
import GameBoard from "./gameBoard.jsx";

//create your first component
const Home = () => {
	const [weapon, setWeapon] = useState(true)
	return weapon ? (
		<div className="text-center">
			<ChooseWeapon />
		</div>
	): (
		<div className="text-center">
			<GameBoard />
		</div>
	);
};

export default Home;
