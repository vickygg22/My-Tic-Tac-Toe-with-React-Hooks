import React from "react";

const WeaponButtons = ({handleWeaponClick}) => {
    return (
        <div className="weaponbuttons">
            <button className="wpbtn1" onClick={handleWeaponClick}>X</button>
            <button className="wpbtn2" onClick={handleWeaponClick}>O</button>
        </div>
    )
}
export default WeaponButtons;