const GenericButton = (props) => {
  return (
    <button onClick={props.onClick} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-4 rounded">
      {props.text}
    </button>
  );
};

export default GenericButton;
