import AddWeaponForm from "../components/forms/AddWeaponForm";
import Title from "../components/layout/Title";

import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import { character as characterAgent } from "../agent";

const AddWeapon = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    characterAgent.getById(id, setCharacter);
  }, []);

  if (character === null) {
    return <h1>Character Not Found</h1>;
  }

  return (
    <div className="text-center">
      <Title title={`Create Weapon for ${character.name}`} />
      <AddWeaponForm characterId={id} />
    </div>
  );
};

export default AddWeapon;
