import React from "react";
import API from "../../API.js";
import { Checkbox } from "semantic-ui-react";

const UserProfessionStage = ({
  nextStage,
  previousStage,
  selectInstrument,
  instruments,
}) => (
  <div className="ui form">
    <h3> Please choose your instruments</h3>
    <div className="ui fluid card">
      {API.getInstruments().map((instrument) => (
        <div key={instrument.id}>
          <Checkbox
            toggle
            type="checkbox"
            defaultValue={instrument.name}
            checked={instruments.includes(instrument.id)}
            onChange={() => selectInstrument("instruments", instrument.id)}
          />
          {instrument.name}
        </div>
      ))}
    </div>
    <br></br>
    <br />
    <button className="ui left floated button" onClick={previousStage}>
      Back
    </button>
    <button className="ui right floated button" onClick={nextStage}>
      Next
    </button>
  </div>
);

export { UserProfessionStage };
