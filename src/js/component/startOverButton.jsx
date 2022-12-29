import React from "react";

const StartOverButton = ({HandleResetGame}) => {
    return (
        <button className="startOver" onClick={HandleResetGame}>Start Over</button>
    )
}
export default StartOverButton;