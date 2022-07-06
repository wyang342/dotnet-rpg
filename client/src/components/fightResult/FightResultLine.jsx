import { useEffect, useState } from "react";

const FightResultLine = (props) => {
  const [hidden, setHidden] = useState(true);
  const { waitTime, line, last } = props;

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, waitTime);
  }, []);

  if (last) {
    return (
      <p className="text-green-500 text-4xl font-bold">{hidden ? "" : line}</p>
    );
  }
  return <p>{hidden ? "" : line}</p>;
};

export default FightResultLine;
