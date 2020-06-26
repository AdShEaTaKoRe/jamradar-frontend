import React from "react";
import API from "../../API.js";
import { Checkbox, Icon, Form, Button, Card } from "semantic-ui-react";

const MatchInstrumentsStage = ({
  nextStage,
  selectInstrument,
  instruments,
}) => (
  <Form>
    <Form.Field>
      <Card.Group itemsPerRow={1}>
        <h3 id="headerim"> What instruments should they play</h3>
        {API.getInstruments().map((instrument) => (
          <Card key={instrument.id}>
            <Checkbox
              toggle
              type="checkbox"
              defaultValue={instrument.name}
              checked={instruments.includes(instrument.id)}
              onChange={() =>
                selectInstrument("match_instrument", instrument.id)
              }
              label={instrument.name}
            />
          </Card>
        ))}
      </Card.Group>
    </Form.Field>
    <Form.Field>
      <Button onClick={nextStage} color="instagram" floated="right">
        Next
        <Icon name="angle double right" />
      </Button>
    </Form.Field>
  </Form>
);

export { MatchInstrumentsStage };
