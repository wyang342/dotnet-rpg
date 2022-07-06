import { character } from "../../agent";
import { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard";
import Title from "../../components/layout/Title";
import { Link } from "react-router-dom";
import GenericButton from "../../components/layout/GenericButton";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    character.getall(setCharacters);
  }, []);

  const characterComponents = characters
    .sort((a, b) => (a.victories < b.victories ? 1 : -1))
    .map((character) => (
      <div key={character.id} className="basis-2/6">
        <CharacterCard character={character} setCharacters={setCharacters} />
      </div>
    ));

  return (
    <section>
      <Title title="Your Characters" />
      <div className="flex mx-5 flex-wrap">{characterComponents}</div>
      {characters.length < 9 ? (
        <div className="m-5">
          <Link to="/character/new/">
            <GenericButton text="Add Character" />
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Characters;
