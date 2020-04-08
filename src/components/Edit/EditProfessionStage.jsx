import React from "react";
import API from "../../API.js";

const EditProfessionStage = ({
  selectInstrument,
  instruments
}) => (
  <>
  <h3>Your Instruments</h3>
    <ul>
      {API.getInstruments().map(instrument => (
        <li key={instrument.id}>
          <input
            type="checkbox"
            value={instrument.name}
            checked={instruments.includes(instrument.id)}
            onChange={() => selectInstrument("instruments", instrument.id)}
          />
          {instrument.name}
        </li>
      ))}
    </ul>
  </>
);

export { EditProfessionStage };
