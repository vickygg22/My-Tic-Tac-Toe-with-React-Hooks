import React from "react";
import WeaponInput from "./weaponInput.jsx";
import WeaponButtons from "./weaponButtons.jsx";

const ChooseWeapon = ({handleWeaponClick}) => {
return (
    <>
    <h3>Pick a weapon</h3>
    <div className="weaponMainDiv">
        <h5>CHOOSE YOUR WEAPON</h5>
        <WeaponInput />
        <WeaponButtons handleWeaponClick={handleWeaponClick}/>
    </div>
    </>
)
}
export default ChooseWeapon;