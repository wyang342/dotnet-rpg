import { skill as skillAgent } from "../agent";

const SkillLink = (props) => {
  const { skill, characterId } = props;

  const onClickHandler = () => {
    const newCharacterSkill = {
      characterId: characterId,
      skillId: skill.id,
    };

    skillAgent.addCharacterSkill(newCharacterSkill);
  };

  return (
    <div
      className="hover:cursor-pointer text-purple-500 hover:text-purple-800 font-semibold my-4"
      onClick={onClickHandler}
    >
      {skill.name} ({skill.damage} dmg)
    </div>
  );
};

export default SkillLink;
