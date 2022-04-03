import { useEffect, useState } from "react";

const TicTac = () => {
  const [currentInput, setCurrentInput] = useState(0);
  const [selectedCellIndexState, setSelectedCellIndex] = useState(null);
  const [tictacValues, setTictacValues] = useState([
    { key: null, value: null },
  ]);
  const grid = [];
  const spanStyle = {
    border: "solid 1px black",
    height: "9rem",
    display: "inline-block",
    width: "9rem",
    padding: "50px",
    margin: 50,
    boxSizing: "border-box",
  };
  useEffect(
    setTictacValues((prevState) => {
      return [
        ...prevState,
        { key: selectedCellIndexState, value: currentInput },
      ];
    }),
    []
  );
  const clickHandler = (e) => {
    let selectedCellIndex = e.target.attributes.value.value;
    var a = document.getElementById("p" + selectedCellIndex);

    if (a.innerText === "--") {
      a.innerText = currentInput;
      setSelectedCellIndex(selectedCellIndex);
      currentInput === 0 ? setCurrentInput(1) : setCurrentInput(0);
      checkForVictory();
    } else {
      return;
    }
  };
  const checkForVictory = () => {
    //if()
    console.log({ tictacValues });
  };
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      grid.push(
        <div
          onClick={(e) => {
            clickHandler(e);
          }}
          id={i + "" + j}
          style={spanStyle}
          value={i + "" + j}
        >
          <p id={"p" + i + "" + j}>{"--"}</p>
        </div>
      );
    }
    grid.push(<br />);
  }
  return <div>{grid}</div>;
};

export default TicTac;

/* 00 01 02
10 11 12
20 21 22 */
