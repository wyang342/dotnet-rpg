import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { character as characterAgent, skill as skillAgent } from "../agent";
import Title from "../components/layout/Title";
import SkillLink from "../components/SkillLink";

const AddSkillPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    characterAgent.getById(id, setCharacter);
    skillAgent.getAll(setSkills);
  }, []);

  if (character === null) {
    return <h1>Character Not Found</h1>;
  }

  const skillIds = character.skills.map((skill) => skill.id);
  const skillItems = skills.map((skill) => {
    if (skillIds.includes(skill.id)) {
      return;
    }
    return (
      <SkillLink key={skill.id} skill={skill} characterId={character.id} />
    );
  });

  return (
    <div className="text-center">
      <Title title={`Add Skill for ${character.name}`} />
      <p>Please select a skill to add:</p>
      {skillItems}
    </div>
  );
};

export default AddSkillPage;
