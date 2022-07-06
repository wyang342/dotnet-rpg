import Title from "../../components/layout/Title";
import CharacterForm from "../../components/forms/CharacterForm";
import { useState, useEffect } from "react";
import { character as characterAgent } from "../../agent";

const CreateCharacter = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    characterAgent.getall(setCharacters);
  }, []);

  return (
    <div>
      <div className="text-center">
        <Title title="Create a Character" />
      </div>
      {characters.length < 9 ? (
        <CharacterForm type="create" />
      ) : (
        <p className="text-center text-red-600 my-10">
          Cannot create more than 9 characters!
        </p>
      )}
    </div>
  );
};

export default CreateCharacter;
