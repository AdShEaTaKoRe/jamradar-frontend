import React from "react";
import API from "../../API.js";
import { Checkbox } from 'semantic-ui-react'

const EditProfessionStage = ({
  selectInstrument,
  instruments
}) => (
  <div className="ui form">
    <label> Your instruments</label>
    <div className="ui fluid card">
      {API.getInstruments().map(instrument => (
        <div  key={instrument.id}>
          <Checkbox toggle
            type="checkbox"
            defaultValue={instrument.name}
            checked={instruments.includes(instrument.id)}
            onChange={() => selectInstrument("instruments", instrument.id)}
          />
          {instrument.name}
        </div>
      ))}
    </div>
  </div>
);

export { EditProfessionStage };
