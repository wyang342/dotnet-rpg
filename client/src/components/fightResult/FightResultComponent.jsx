import FightResultLine from "./FightResultLine";

const FightResultComponent = (props) => {
  const { logs } = props;

  const printLogs = () => {
    const arrToReturn = [];

    for (let i = 0; i < logs.length; i++) {
      arrToReturn.push(
        <FightResultLine
          waitTime={i * 2000}
          line={logs[i]}
          last={i === logs.length - 1}
        />
      );
    }

    return arrToReturn;
  };

  return <div>{printLogs()}</div>;
};

export default FightResultComponent;
