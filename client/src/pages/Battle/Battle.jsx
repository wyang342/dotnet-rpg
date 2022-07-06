import { useState, useEffect } from "react";
import GenericButton from "../../components/layout/GenericButton";
import CharacterCard from "../../components/CharacterCard";
import { character, fight } from "../../agent";
import Title from "../../components/layout/Title";
import FightResultComponent from "../../components/fightResult/FightResultComponent";

const Battle = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [charactersChosen, setCharactersChosen] = useState([]);
  const [finishedSelection, setFinishedSelection] = useState(false);
  const [fightLogs, setFightLogs] = useState([]);
  const [fightStarted, setFightStarted] = useState(false);

  useEffect(() => {
    character.getall(setCharacters);
  }, []);

  const startFight = () => {
    const obj = {
      characterIds: charactersChosen,
    };
    fight.start(obj, setFightLogs);
    setFightStarted(true);
  };
  const handleSelected = (id) => {
    setCharactersChosen([...charactersChosen, id]);
  };

  useEffect(() => {
    if (charactersChosen.length > 1) {
      setFinishedSelection(true);
    }
  }, [charactersChosen]);

  const characterComponents = characters
    .sort((a, b) => (a.victories < b.victories ? 1 : -1))
    .map((character) => (
      <div key={character.id} className="basis-2/6">
        <CharacterCard
          character={character}
          setCharacters={setCharacters}
          isSelectionScreen={isStarted}
          handleSelected={handleSelected}
        />
      </div>
    ));
  const showCharacters = () => {
    setIsStarted(true);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-3xl text-center">
          <Title title="Battle" />
        </div>
        <div className="text-center">
          {fightStarted ? (
            <FightResultComponent logs={fightLogs} />
          ) : (
            <span>
              {isStarted ? (
                <div>
                  <div className="flex flex-wrap">{characterComponents}</div>
                  {finishedSelection ? (
                    <div className="mt-5">
                      <GenericButton onClick={startFight} text="Let's Fight" />
                    </div>
                  ) : null}
                </div>
              ) : (
                <GenericButton onClick={showCharacters} text="Start" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Battle;
