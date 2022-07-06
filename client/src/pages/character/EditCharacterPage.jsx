import CharacterForm from "../../components/forms/CharacterForm";
import Title from "../../components/layout/Title";

const EditCharacterPage = () => {
  return (
    <div>
      <div className="text-center">
        <Title title="Edit a Character" />
      </div>
      <CharacterForm type="edit" />
    </div>
  );
};

export default EditCharacterPage;
