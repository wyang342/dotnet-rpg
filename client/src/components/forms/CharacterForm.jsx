import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { character as characterAgent } from "../../agent";
import GenericButton from "../layout/GenericButton";

const CharacterForm = (props) => {
  const { type } = props;
  const { id } = useParams();

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [character, setCharacter] = useState(null);

  // Sets initial values based on form type
  useEffect(() => {
    if (type === "create") {
      setFormValues({
        Name: "",
        Strength: "",
        Defense: "",
        Intelligence: "",
      });
    } else if (type === "edit") {
      characterAgent.getById(id, setCharacter);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(formErrors).length !== 0 || !isSubmit) {
      return;
    }

    if (type === "create") {
      characterAgent.create(formValues, navigate);
    } else if (type === "edit") {
      characterAgent.edit({ ...formValues, id: id }, navigate);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.name = "Character Name is required";
    }
    if (!values.Strength || !values.Defense || !values.Intelligence) {
      errors.attributes = "Attributes are required";
    }
    return errors;
  };

  const createOptions = () => {
    const arrToReturn = [];

    for (let i = 1; i <= 10; i++) {
      arrToReturn.push(<option value={`${i}`} key={i} />);
    }

    return arrToReturn;
  };

  return (
    <form id="formScreen" onSubmit={handleSubmit} className="text-center">
      <div className="my-10">
        <label>Name: </label>
        <input
          className="border border-gray-300"
          type="text"
          name="Name"
          placeholder={character ? character.name : "Character Name"}
          onChange={handleChange}
        />
        <p className="text-rose-600">{formErrors.name}</p>
      </div>

      <div id="attributeSection">
        <span className="mx-5">
          <label>Strength: </label>
          <input
            className="border border-gray-300 w-12"
            list="numbers"
            name="Strength"
            placeholder={character ? character.strength : 0}
            onChange={handleChange}
          />
        </span>
        <span className="mx-5">
          <label>Defense: </label>
          <input
            className="border border-gray-300 w-12"
            list="numbers"
            name="Defense"
            placeholder={character ? character.defense : 0}
            onChange={handleChange}
          />
        </span>
        <span>
          <label>Intelligence: </label>
          <input
            className="border border-gray-300 w-12"
            list="numbers"
            name="Intelligence"
            placeholder={character ? character.intelligence : 0}
            onChange={handleChange}
          />
        </span>
        <datalist id="numbers">{createOptions()}</datalist>
      </div>
      <p className="text-rose-600">{formErrors.attributes}</p>
      {/*         
        <div id="playerTypeSection" className="py-2 my-3"  >
          <p className="py-2 my-3">Please select your Player Type</p>
          <input type="radio" name="Class" value="1" onChange={handleChange}/>
          <label>Knight</label>
          <input type="radio" name="Class" value="2" onChange={handleChange}/>
          <label>Mage</label>
          <input type="radio" name="Class" value="3" onChange={handleChange}/>
          <label htmlFor="Barbarian">Cleric</label>
        </div>
        <p className="text-rose-600">{formErrors.class}</p> */}
      <div className="my-7">
        <GenericButton text={`${props.type.toUpperCase()}`} />
      </div>
    </form>
  );
};

export default CharacterForm;
