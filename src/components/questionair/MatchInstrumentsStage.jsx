import React from "react";
import API from "../../API.js";
import { Checkbox } from "semantic-ui-react";

const MatchInstrumentsStage = ({
  nextStage,
  selectInstrument,
  instruments,
}) => (
  <div className="ui form">
    <h3> What instruments should they play</h3>
    <div className="ui fluid card">
      {API.getInstruments().map((instrument) => (
        <div key={instrument.id}>
          <Checkbox
            toggle
            type="checkbox"
            defaultValue={instrument.name}
            checked={instruments.includes(instrument.id)}
            onChange={() => selectInstrument("match_instrument", instrument.id)}
          />
          {instrument.name}
        </div>
      ))}
    </div>
    <br></br>
    <br />
    <button className="ui right floated button" onClick={nextStage}>
      Next
    </button>
  </div>
);

export { MatchInstrumentsStage };
