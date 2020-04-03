import React from "react";
import API from "../../API.js";

const MatchInstrumentsStage = ({
    nextStage,
    selectInstrument,
    instruments
  }) => (
    <>
      <h1> What musician/s are you looking for</h1>
      <ul>
        {API.getInstruments().map(instrument => (
          <li>
            <input
              type="checkbox"
              key={instrument.id}
              value={instrument.name}
              checked={instruments.includes(instrument.id)}
              onChange={() => selectInstrument("instruments", instrument.id)}
            />
            {instrument.name}
          </li>
        ))}
      </ul>
      <button onClick={nextStage}>Next</button>
    </>
  );
  
  export { MatchInstrumentsStage };