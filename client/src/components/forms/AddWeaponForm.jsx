import { useRef, useState } from "react";
import { weapon } from "../../agent";
import GenericButton from "../layout/GenericButton";

const AddWeaponForm = (props) => {
  const nameRef = useRef();
  const damageRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();

    const name = nameRef.current.value;
    const damage = damageRef.current.value;

    if (name === "" || damage === "") {
      console.error("Name or damage is not filled out!");
      return;
    }

    const newWeaponObj = {
      name: name,
      damage: damage,
      characterId: props.characterId,
    };

    weapon.add(newWeaponObj);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          ref={nameRef}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="my-2">
        <label htmlFor="damage">Damage: </label>
        <input
          type="text"
          name="damage"
          id="damage"
          ref={damageRef}
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mt-3">
        <GenericButton text="Create Weapon" />
      </div>
    </form>
  );
};

export default AddWeaponForm;
