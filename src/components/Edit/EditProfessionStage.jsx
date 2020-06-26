import React from "react";
import API from "../../API.js";
import { Checkbox, Form, Card } from "semantic-ui-react";

const EditProfessionStage = ({ selectInstrument, instruments }) => (
  <Form>
    <Form.Field>
        <label className="labels"> Your instruments</label>
      <Card.Group itemsPerRow={1}>
        {API.getInstruments().map((instrument) => (
          <Card key={instrument.id}>
            <Checkbox
              toggle
              type="checkbox"
              defaultValue={instrument.name}
              checked={instruments.includes(instrument.id)}
              onChange={() => selectInstrument("instruments", instrument.id)}
              label={instrument.name}
            />
          </Card>
        ))}
      </Card.Group>
    </Form.Field>
  </Form>
);

export { EditProfessionStage };
