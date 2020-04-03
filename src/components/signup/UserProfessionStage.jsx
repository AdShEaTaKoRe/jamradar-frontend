import React from "react";
import API from "../../API.js";

const UserProfessionStage = ({
  nextStage,
  previousStage,
  selectInstrument,
  instruments
}) => (
  <>
    <h1> User Instruments</h1>
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
    <button onClick={previousStage}>Back</button>
    <button onClick={nextStage}>Next</button>
  </>
);

export { UserProfessionStage };
