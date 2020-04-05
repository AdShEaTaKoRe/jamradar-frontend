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
          <li key={instrument.id}>
            <input
              type="checkbox"
              value={instrument.name}
              checked={instruments.includes(instrument.id)}
              onChange={() => selectInstrument("match_instrument", instrument.id)}
            />
            {instrument.name}
          </li>
        ))}
      </ul>
      <button onClick={nextStage}>Next</button>
    </>
  );
  
  export { MatchInstrumentsStage };