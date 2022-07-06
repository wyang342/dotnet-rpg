import { Link } from "react-router-dom";
import { character as characterAgent, skill as skillAgent } from "../agent";
import { useState, useEffect } from "react";
import GenericButton from "./layout/GenericButton";

const CharacterCard = (props) => {
  const { character, setCharacters } = props;
  const weapon = character.weapon;
  const skills = character.skills;
  const skillsString = skills.map((skill) => skill.name).join(", ");

  const [allSkills, setAllSkills] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    skillAgent.getAll(setAllSkills);
  }, []);

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg grow text-center ${
        !color ? "hover:bg-slate-50" : ""
      } ${color}`}
    >
      <h3 className="font-bold text-slate-600 hover:text-black">
        <Link to={`/character/${character.id}/edit/`}>
          {character.name + " (" + character.hitPoints + ")"}
        </Link>
      </h3>
      <div className="my-3">
        {/* <p>Class: {character.class}</p> */}
        <p>{weapon ? "Weapon: " + weapon.name : null}</p>
        <p>{skills.length !== 0 ? `Skills: ${skillsString}` : null}</p>
        <p>Strength: {character.strength}</p>
        <p>Defense: {character.defense}</p>
        <p>Intelligence: {character.intelligence}</p>
        <p>
          W/L/T:{" "}
          {character.victories +
            "/" +
            character.defeats +
            "/" +
            character.fights}
        </p>
      </div>
      {!props.isSelectionScreen ? (
        <span>
          <button
            onClick={() => characterAgent.delete(character.id, setCharacters)}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2"
          >
            Delete
          </button>
          {!weapon ? (
            <Link to={`/character/${character.id}/new-weapon/`}>
              <button
                className="text-blue-700 hover:text-white border border-blue-700
                        hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
                          rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2"
              >
                + Weapon
              </button>
            </Link>
          ) : null}
          {character.skills.length < allSkills.length ? (
            <Link to={`/character/${character.id}/add-skill/`}>
              <button
                className="text-purple-700 hover:text-white border border-purple-700
                      hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300
                        font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2"
              >
                + Skill
              </button>
            </Link>
          ) : null}
        </span>
      ) : (
        <GenericButton
          onClick={() => {
            props.handleSelected(character.id);
            setColor("bg-green-400");
          }}
          text="Select"
        />
      )}
    </div>
  );
};

export default CharacterCard;
